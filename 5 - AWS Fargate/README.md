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

## 2. Install the Fargate CLI tool:

For this workshop we will be using a command line tool by @jpignata called [fargate](http://somanymachines.com/fargate/)

```
curl -OL https://github.com/jpignata/fargate/releases/download/v0.2.1/fargate-0.2.1-linux-amd64.zip | unzip
sudo unzip fargate-0.2.1-linux-amd64.zip -d /usr/local/bin
```

## 3. Get the code

Clone the workshop repository using its public endpoint, then switch your current working directory to the elastic beanstalk code directory:

```
cd ~
git clone https://github.com/nathanpeck/nodejs-aws-workshop.git
cd nodejs-aws-workshop/5\ -\ AWS\ Fargate/code
```
