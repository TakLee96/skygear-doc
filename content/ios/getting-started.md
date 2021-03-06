<a name="getting-started"></a>
## Introduction

Skygear aims to provide a complete and open-source backend solution for
your mobile applications.

By creating an App for each of your mobile applications on Skygear, each
client App can be connected to the Skygear Server with an API key.

This guide will show you how to integrate Skygear into an existing iOS project.

<a name="sign-up-hosting"></a>
## Signing up for Skygear Hosting

Sign up an account at [Skygear Portal](http://portal.skygear.io/).

You will need the _Server Endpoint_ and _API Key_ to set up your app.

Go to the Info tab on the sidebar, and you will see your _Server Endpoint_ in the "Server Details" section and your _API Key_ in its section.


<a name="include-ios-sdk"></a>
## Include the SDK in your project

The installation requires [CocoaPods](https://cocoapods.org/).

To install the Skygear iOS SDK as your iOS application dependency:

### For Objective-C Projects

1. Open and edit the `Podfile` file, add the following in the last line:

```
pod "SKYKit"
```

2. Run `pod install` in your terminal.
3. It's done! You now have installed Skygear SDK in your app.

### For Swift Projects

1. Open and edit the `Podfile` file. Your `Podfile` file should look like this:

```
use_frameworks!
platform :ios, '8.0'
pod 'SKYKit'
```

CocoaPods 0.36 and above introduces the `use_frameworks!` instruction, so the Objective-C bridging header is no longer needed.

2. Run `pod install` in your terminal.
3. You would see that an Xcode Workspace file is created. Open the file and go to the project.
4. It's done! You have installed Skygear SDK in your app. Just import the SDK in each swift file to call the SDK.

<a name="set-up-ios-app"></a>
## Setting up your iOS app

`SKYContainer` is the uppermost layer of `SKYKit`. It represents the root of all
resources accessible by an application and one application should have exactly
one container. In `SKYKit`, such container is accessed via the singleton
`defaultContainer`:

```obj-c
SKYContainer *container = [SKYContainer defaultContainer];
```

Container provides [User Authentication]({{< relref "user.md" >}}),
[Asset Storage]({{< relref "asset.md" >}}) and access to
[public and private databases]({{< relref "#SKYDatabase" >}}).

Now, you are going to setup the server endpoint and API key for your app.

The `SKYContainer` (Skygear Container) object is the primary interface for interacting with the Skygear service. The object is initialized with the sever endpoint and an API key.

In `AppDelegate.m`, include `SKYKit`:

```obj-c
import <SKYKit/SKYKit.h>
```

Then add these lines in the `application:didFinishLaunchingWithOptions:` method:

```obj-c
SKYContainer *container = [SKYContainer defaultContainer];
[container configAddress:@"https://your-endpoint.skygeario.com/"]; //Your server endpoint
[container configureWithAPIKey:@"SKYGEAR_API_KEY"]; //Your Skygear API Key
```

Replace `your-endpoint.skygeario.com` with your Server Endpoint and `SKYGEAR_API_KEY` with your API Key.

<a name="whats-next"></a>
## What's Next
Now you've learned how to start developing with Skygear, check out the SDK docs to learn some of the concepts behind Skygear.

Interested in doing more with your Skygear backend server? 

The Plugin interface is designed to empower developers to automate, extend, and integrate functionality provided by the Skygear Server with other services and applications. For more information, check out the Plugin docs.
