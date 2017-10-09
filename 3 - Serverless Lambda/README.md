## 1. Install serverless on your dev machine

```
npm install -g serverless
```

## 2. Configure your serverless provider to be AWS

```
serverless config credentials --provider aws --key <access key> --secret <secret key>
```

The access key and secret key are the same access key and secret key that was used in the previous Elastic Beanstalk tutorial.

## 3. Deploy the application

```
serverless deploy
```

![serverless deploy](./images/serverless-deploy.png)

## 4. Try fetching one of the endpoints

In the output from the previous deploy step you will see a list of the API routes that were setup. Try fetching one of them in your browser.

For example:

```
curl https://dvlc67ufq7.execute-api.us-east-1.amazonaws.com/dev/api/characters
curl https://dvlc67ufq7.execute-api.us-east-1.amazonaws.com/dev/api/characters/by-species/vampire
```

## 5. Try modifying a function

You can modify any function, and redeploy by once again running:

```
serverless deploy
```

## 6. Cleanup your environment

Destroy all created resources by using

```
serverless remove
```

![serverless remove](./images/serverless-remove.png)
