# Deploying Node.js on AWS

As a developer you are probably already familiar with how to build and run an application on your local machine:

![small localhost](1%20-%20Development%20Environment/images/localhost.png)

But the next step is packaging your application up and running it on a server, or even a whole fleet of servers, and managing this can be challenging:

![large deployment](1%20-%20Development%20Environment/images/deployment.png)

This workshop will help you take the same sample app from localhost to deployed on AWS multiple times, using a variety of different deployment mechanisms:

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [AWS Lambda](https://aws.amazon.com/lambda/) + [Serverless](https://serverless.com/)
- [Elastic Container Service](https://aws.amazon.com/ecs/)
- [AWS Fargate](https://aws.amazon.com/fargate/)
- [Kubernetes](https://kubernetes.io/) + [kops](https://github.com/kubernetes/kops) + [kubectl](https://kubernetes.io/docs/reference/generated/kubectl/kubectl/)

For this workshop the sample application code is written in Node.js but the same deployment mechanisms can be applied to other runtime languages.

## Sample Application

<img align="left" width="140" src="https://github.com/nathanpeck/nodejs-aws-workshop/blob/master/1%20-%20Development%20Environment/images/adventure-time.png">
The sample app is a simple REST API for an Adventure Time fan website. The API provides endpoints for consuming structured data about Adventure Time characters and locations.

You can view an example of the raw data [here](2%20-%20Elastic%20Beanstalk/code/db.json)

The external HTTP interface of the API has a basic spec:

- `GET /api/` - A simple welcome message
- `GET /api/characters` - A list of all characters
- `GET /api/characters/:id` - Fetch a specific character by ID
- `GET /api/locations` - A list of all locations
- `GET /api/locations/:id` - Fetch a specific location by ID
- `GET /api/characters/by-location/:locationId` - Fetch all characters at a specific location
- `GET /api/characters/by-gender/:gender` - Fetch all characters of specified gender
- `GET /api/characters/by-species/:species` - Fetch all characters of specified species
- `GET /api/characters/by-occupation/:occupation` - Fetch all characters that have specified occupation

&nbsp;

## Instructions

1. [Create a remote development machine](1%20-%20Development%20Environment/) to use for the rest of workshop
2. [Deploy API using Elastic Beanstalk](2%20-%20Elastic%20Beanstalk/)
3. [Deploy API using AWS Lambda](3%20-%20Serverless%20Lambda/)
4. [Deploy API using Elastic Container Service](4%20-%20Elastic%20Container%20Service/)
5. [Deploy API using AWS Fargate](5%20-%20AWS%20Fargate/)
6. [Deploy API using Kubernetes with kops](6%20-%20Kubernetes%20(kops)/)

If you are running at home or on your own personal dev machine you technically don't have to use the remote development machine from step #1 and could instead choose to setup the dev environment on your own machine. This workshop encourages the use of a remote dev machine to avoid variations in personal devices when giving the workshop to many attendees, and additionally to move the burden of package downloads and container uploads onto an AWS internet connection instead of the local wifi connection at the workshop venue.

You will notice throughout this workshop that the instructions tend to
focus on how to deploy architectures using infrastructure as code. So
you will see a lot of commands that files from a `recipes` folder, for example.
You should definitely check out the contents of these "recipes" to
see more details about what is being deployed, and how it is configured.
