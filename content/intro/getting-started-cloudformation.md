+++
date = "2016-02-16T11:10:04+08:00"
draft = true
title = "Getting Started with CloudFormation"

+++

**NOTE**: This doc is for illustration purpose only. This illustrates how
a user will be able to start using Skygear easily in AWS.

# Start using Skygear in AWS

**NOTE**: The set up time of a EC2 instance is under 3 minutes.

Click the button below to get started:

<a href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=myteststack&templateURL=https://s3.amazonaws.com/samplecfntemplates/mytemplate.template" target="_new">
<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">
</a>

Navigate to the created instance and follow the on-screen instructions.

## ...or using the AWS console

1. Navigate to the AWS web console
2. Click on **CloudFormation** in **Deployment & Management**
3. Choose **Create New Stack**
4. Select Amazon S3 template URL and enter:

```
https://s3.amazonaws.com/samplecfntemplates/mytemplate.template
```

## ...or using the AWS command line interface

Copy and paste the following command:

```
aws cloudformation create-stack \
  --region us-east-1 \
  --stack-name SkygearServer \
  --template-url https:// \
  --parameters ParameterKey=Instance,ParameterValue=r3.large \
  --parameters ParameterKey=Data,ParameterValue=50
```

## ...or using something else?

Start an EC2 instance using the AMI `ami-8badf00d` using the EC2 Console
or using any of your favourite tools.

## AWS Costs

Although Skygear is free and open source, AWS is not. See [EC2
Pricing](http://aws.amazon.com/ec2/pricing/) for
details.

## Need help?

Contact us for help!
