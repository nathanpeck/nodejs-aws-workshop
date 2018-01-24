# Node.js deployed on AWS using Amazon Fargate

![ecs architecture](images/ecs-architecture.png)

In this workshop we will deploy two microservices as containers running in Amazon Fargate orchestrated by Elastic Container Service. Traffic will reach the containers through an AWS Application Load Balancer which routes traffic to the two different services based on the path of the request.

&nbsp;

&nbsp;

## 1. Connect to your development machine

If you have not done so already create [a development machine on AWS](../1%20-%20Development%20Environment) to do this
workshop.

If you don't already have an SSH session open, SSH to your development machine.

```
ssh -i ~/.ssh/<your key>.pem ec2-user@<your dev machine ip address>
```

If you haven't already done so clone the workshop code onto the dev machine:

```
cd ~
git clone https://github.com/nathanpeck/nodejs-aws-workshop.git
```

Then change your current working directory to the right directory for this section of the workshop:

```
cd ~/nodejs-aws-workshop/5\ -\ AWS\ Fargate/code
```

&nbsp;

&nbsp;

## 2. Install the Fargate CLI tool:

For this workshop we will be using a command line tool by [@jpignata](https://github.com/jpignata) called [fargate](http://somanymachines.com/fargate/)

```
curl -OL https://github.com/jpignata/fargate/releases/download/v0.2.1/fargate-0.2.1-linux-amd64.zip
sudo unzip fargate-0.2.1-linux-amd64.zip -d /usr/local/bin
```

&nbsp;

&nbsp;

## 3. Create a load balancer for your AWS Fargate deployment

```
fargate lb create node-app --port 80
```

![create load balancer](images/create-load-balancer.png)

&nbsp;

&nbsp;

## 4. Build and deploy

Now its time to build and deploy the two services:

First the characters service:

```
cd characters
fargate service create characters --lb node-app --port 80 --rule PATH=/api/characters*
```

And then the locations service:

```
cd ../locations
fargate service create locations --lb node-app --port 80 --rule PATH=/api/locations*
```

You will see output similar to this when deploying a service:

![create service](images/create-service.png)

As your Fargate services launch you can query their info using this command:

```
fargate service info characters
```

![service info](images/service-info.png)

You can also look at the [ECS cluster in the AWS console](https://us-east-1.console.aws.amazon.com/ecs/home?region=us-east-1#/clusters/fargate/services) to see your services and their current status.

&nbsp;

&nbsp;

## 5. Fetch load balancer info

Now lets fetch the info of the load balancer to make sure that it is configured correctly and to get the DNS name of the load balancer:

```
fargate lb info node-app
```

You will see output similar to this: 

![cloudformation outputs](images/load-balancer-info.png)

&nbsp;

&nbsp;

## 6. Test the API

Using the DNS name from the load balancer make a request to the API as deployed in Fargate using `curl` or your browser. For example:

```
curl node-app-1592151400.us-east-1.elb.amazonaws.com/api/characters
curl node-app-1592151400.us-east-1.elb.amazonaws.com/api/locations
```

![browser request](images/browser-request.png)

&nbsp;

&nbsp;

## 7. Scale a service

Right now the two Fargate services are deployed as single containers. With the Fargate CLI you can easily scale these services to deploy more copies of the containers behind the load balancer.

```
fargate service scale characters +2
```

![service scale](images/service-scale.png)

&nbsp;

&nbsp;

## 8. Update a service

You can redeploy a service by making a change to its code and then using the following command to redeploy the service.

```
fargate service deploy characters
```

&nbsp;

&nbsp;

## 9. Shut down & clean up

Scale the Fargate services down to zero containers:

```
fargate service scale characters 0
fargate service scale locations 0
```

Once the services have finished scaling down destroy them:

```
fargate service destroy characters
fargate service destroy locations
```

Get rid of the load balancer that you created:

```
fargate lb destroy node-app
```

Go to the [repositories tab on the ECS dashboard](https://us-east-1.console.aws.amazon.com/ecs/home?region=us-east-1#/repositories), and select the "characters" and "locations" repositories, and click "Delete Repository"

![cloudformation outputs](images/delete-repository.png)

Last but not least if you are done with this workshop don't forget to also delete the cloudformation stack "nodejs-dev-machine", to destroy the development machine you used throughout this workshop.
