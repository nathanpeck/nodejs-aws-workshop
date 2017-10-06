## Create IAM User for Elastic Beanstalk

1. Navigate to the [list of IAM users on your AWS account](https://console.aws.amazon.com/iam/home#/users)

![IAM home](./images/iam-home.png)

2. Click the "Add User" button and fill out the two fields as indicated then click "Next"

![Create User](./images/create-user.png)

3. Attach permissions to the user by selecting "Attach existing policies directly" and selecting the "AdministratorAccess" policy, then click "Next"

![Attach Permissions](./images/attach-permissions.png)

4. Review the settings to ensure that they match, then click "Create User"

![Review](./images/review.png)

5. Click the "Download .csv" button to save the credentials for this user for future use.

![Get Credentials](./images/get-credentials.png)

## Setup Elastic Beanstalk on the development instance

If you don't already have an SSH shell open on the development instance open one now:

1. Clone the workshop repository and navigate to folder containing the code:

```
cd ~
git clone https://github.com/nathanpeck/empirejs-workshop-nodejs-aws.git
cd empirejs-workshop-nodejs-aws/2\ -\ Elastic\ Beanstalk/code
```

2. Install the Elastic Beanstalk command line tool

```
pip install awsebcli --upgrade --user
```

3. Initialize an Elastic Beanstalk application in the code directory:

```
eb init
```

This will start a command line wizard that asks questions about how you want to setup your application.

Complete the wizard as shown below:

![EB init](./images/configure-elastic-beanstalk.png)

4. Create an environment for your application:

```
eb create
```

This will start a command line wizard that asks you a few questions about the environment. You will need to enter your own name for the environment, and choose the "Network" load balancer type:

![EB create](./images/create-environment.png)

Note that it will take a few minutes to launch your first environment, since this is creating all the initial resources that are required. Once the environment is created future updates are faster.

5. Verify that you environment is up and running:

Access you environment using the URL that is listed in the Elastic Beanstalk interface:

![EB create](./images/environment-url.png)

Here is an example of using curl to fetch a list of users from the API:

```
http://empirejs-workshop-dev.us-east-2.elasticbeanstalk.com/api/users
```
