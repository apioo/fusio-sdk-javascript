import Client from './../src/Client';

// @TODO set correct client credentials
let client = new Client(
    'http://127.0.0.1/projects/fusio/public/index.php',
    'test',
    'test1234'
);

client.backend().getBackendRoutes().then(async (resource) => {
    let response = await resource.backendActionRouteGetAll();
    if (!response.data.entry) {
        return;
    }

    response.data.entry.map((entry) => {
        console.log(entry.path + "\n");
    });
})
