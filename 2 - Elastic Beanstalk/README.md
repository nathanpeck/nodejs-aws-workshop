## Create IAM User for Elastic Beanstalk

1. Navigate to the [list of IAM users on your AWS account](https://console.aws.amazon.com/iam/home#/users)

![IAM home](pictures/iam-home.png)

2. Click the "Add User" button and fill out the two fields as indicated then click "Next"

![Create User](pictures/create-user.png)

3. Attach permissions to the user by selecting "Attach existing policies directly" and selecting the "AdministratorAccess" policy, then click "Next"

![Attach Permissions](pictures/attach-permissions.png)

4. Review the settings to ensure that they match, then click "Create User"

![Review](pictures/review.png)

5. Click the "Download .csv" button to save the credentials for this user for future use.

![Get Credentials](pictures/get-credentials.png)

## Setup Elastic Beanstalk on the development instance

If you don't already have an SSH shell open on the development instance open one now:

1. Clone the workshop repository and navigate to folder containing the code:

```
cd ~
git clone https://github.com/nathanpeck/empirejs-workshop-nodejs-aws.git
cd empirejs-workshop-nodejs-aws/2\ -\ Elastic\ Beanstalk/code
```

Once you are in the application code directory run `npm install` to install the application dependencies.

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

![EB init](pictures/configure-elastic-beanstalk.png)
