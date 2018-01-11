## 1. Install serverless on your dev machine

If don't already have an SSH session open, SSH into your dev machine:

```
ssh -i ~/.ssh/<your key>.pem ec2-user@<your dev machine ip address>
```

Now install the Serverless framework on your dev machine:

```
npm install -g serverless
```

&nbsp;

&nbsp;

## 2. Deploy the application

Change your current working directory to the project directory then deploy using Serverless:

```
cd ~/empirejs-workshop-nodejs-aws/3\ -\ Serverless\ Lambda/code
serverless deploy
```

![serverless deploy](./images/serverless-deploy.png)

&nbsp;

&nbsp;

## 3. Try fetching one of the endpoints

In the output from the previous deploy step you will see a list of the API routes that were setup. Try fetching one of them in your browser.

For example:

```
curl https://dvlc67ufq7.execute-api.us-east-1.amazonaws.com/dev/api/characters
curl https://dvlc67ufq7.execute-api.us-east-1.amazonaws.com/dev/api/characters/by-species/vampire
```

&nbsp;

&nbsp;

## 4. Tour the AWS Lambda console

Check out the AWS console to see a list of the lambda functions that were created by Serverless:

![lambda funciton list](./images/function-list.png)

And to see how HTTP traffic gets to your Lambda functions you should check the [API Gateway console](https://us-east-1.console.aws.amazon.com/apigateway/home?region=us-east-1#/apis)

![api gateway](./images/api-gateway.png)

&nbsp;

&nbsp;

## 5. Try modifying a function

You can modify any function, and redeploy by once again running:

```
serverless deploy
```

&nbsp;

&nbsp;

## 6. Cleanup your environment

Destroy all created resources by using

```
serverless remove
```

![serverless remove](./images/serverless-remove.png)
