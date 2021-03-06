The cloud backend

How to kick start the server
```
docker run skygeario/skygear-server
```

Save a record to DB using SDK

``` javascript
skygear.publicDB.save(new Note({
    'content': 'Hello World!'
})).then(function (record) {
    console.log(record);
}, function (error) {
    console.log(error);
});
```

[Get Start!]({{< relref "intro/getting-started.md" >}})

[SDK Doc]({{< relref "ios/getting-started.md" >}})

### Core

- Easy to use CLI
- Schema free to kick start
- Lock model on production to prevent error
- Model reference to build relation
- Build-in relation-based access control
- MIT Licensed

### Plugin

- Database hook: `beforeSave`, `afterSave`, `beforeDelete`, `afterDelete`
- Able to run random SQL if you know what you are doing

### Client SDKs

- Easily persist data on client
- Send and receive push notification
- Store file
- iOS/Android
- JavaScript - Node.js, browser, react-native


### What's next?

[Interact with server using CLI]({{< relref "cli/intro.md" >}})
[Create your plugin]({{< relref "plugin/intro.md" >}})
