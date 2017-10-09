## 1. Connect to your development machine

If you don't already have an SSH session open, SSH to your development machine.

```
ssh -i ~/.ssh/<your key>.pem ec2-user@<your dev machine ip address>
```

Then change your current working directory to the project directory:

```
cd ~/empirejs-workshop-nodejs-aws/4\ -\ EC2\ Container\ Service/code
```

&nbsp;

&nbsp;

## 2. Create a container registry for each service:

```
aws ecr create-repository --repository-name characters --region us-east-2
aws ecr create-repository --repository-name locations --region us-east-2
```

You will get output similar to this:

```
{
    "repository": {
        "registryId": "[your account ID]",
        "repositoryName": "characters",
        "repositoryArn": "arn:aws:ecr:us-east-2:[your account ID]:repository/characters",
        "createdAt": 1507564672.0,
        "repositoryUri": "[your account ID].dkr.ecr.us-east-2.amazonaws.com/characters"
    }
}
```

Take note of the `repositoryUri` value in each response, as you will need to use it later.

Now authenticate with your repository so you have permission to push to it:

- Run `aws ecr get-login --no-include-email --region us-east-2`
- You are going to get a massive output starting with `docker login -u AWS -p ...`
- Copy this entire output, paste, and run it in the terminal.

You should see Login Succeeded

## 3. Build and Push

First build each service's container image:

```
docker build -t characters services/characters/.
docker build -t locations services/locations/.
```

Run `docker images` and verify that you see following two container images:

```
REPOSITORY                TAG                 IMAGE ID            CREATED              SIZE
locations                 latest              ef276a9ad40a        28 seconds ago       58.8 MB
characters                latest              702e42d339d9        About a minute ago   58.8 MB
```

Then tag the container images and push them to the repository:

```
docker tag characters:latest [your characters repo URI]:v1
docker tag locations:latest [your locations repo URI]:v1
```

Example:

```
docker tag characters:latest 209640446841.dkr.ecr.us-east-2.amazonaws.com/characters:v1
docker tag locations:latest 209640446841.dkr.ecr.us-east-2.amazonaws.com/locations:v1
```

Finally push the tagged images:

```
docker push [your characters repo URI]:v1
docker push [your locations repo URI]:v1
```

Example:

```
docker push 209640446841.dkr.ecr.us-east-2.amazonaws.com/characters:v1
docker push 209640446841.dkr.ecr.us-east-2.amazonaws.com/locations:v1
```

&nbsp;

&nbsp;

## 3. Launch a cluster

Use the following command to launch an ECS cluster on your account:

```
aws cloudformation deploy --stack-name cluster --template-file recipes/cluster.yml --region us-east-2
```


