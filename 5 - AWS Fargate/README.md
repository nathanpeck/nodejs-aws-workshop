## 1. Connect to your development machine

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

For this workshop we will be using a command line tool by @jpignata called [fargate](http://somanymachines.com/fargate/)

```
curl -OL https://github.com/jpignata/fargate/releases/download/v0.2.1/fargate-0.2.1-linux-amd64.zip | unzip
sudo unzip fargate-0.2.1-linux-amd64.zip -d /usr/local/bin
```

## 3. Create a load balancer for your AWS Fargate deployment

```
fargate lb create node-app --port 80
```

## 4. Build and deploy

```
cd characters
fargate service create characters --lb node-app --port 80 --rule PATH=/api/characters*
cd ../locations
fargate service create locations --lb node-app --port 80 --rule PATH=/api/locations*
```

## 5. Fetch load balancer info

Now lets fetch the info of the load balancer to make sure that it is configured correctly and to get the DNS name of the load balancer:

```
fargate lb info node-app
```
