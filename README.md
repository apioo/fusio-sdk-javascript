
# Fusio SDK

This Javascript library helps to talk to the Fusio (https://www.fusio-project.org/)
API. It uses the automatically generated typescript definition of the Fusio
backend. The following code contains some samples how to use the SDK: 

```javascript

// configure the sdk
Fusio.init({
    baseUrl: "https://myapi.com",
    accessToken: "my-access-token",
});

// output all configured backend routes
Fusio.backend.routes.collection().get({}).then((res) => {
    res.data.entry.forEach((entry) => {
        console.log("route " + entry.path);
    });
});

// obtain an access token by using username and password
Fusio.consumer.login.do().post({username: "foo", password: "bar"}).then((res) => {
    console.log("Obtained access token " + res.data.token);
});

```

