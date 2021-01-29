import Client from './../src/generated/backend/Client';
import {Authenticator} from "../src/Authenticator";

// @TODO set correct base uri
let baseUri = 'http://127.0.0.1/projects/fusio/public/index.php';

// request access token
let authenticator = new Authenticator(baseUri);
authenticator.requestAccessToken('test', 'test1234').then((response) => {
    console.log('Obtained token: ' + response.data.access_token + "\n");

    // create new backend client with the token and get all backend routes
    let client = new Client(baseUri, response.data.access_token);
    client.getBackendRoutes().backendActionRouteGetAll().then((response) => {
        if (!response.data.entry) {
            return;
        }

        response.data.entry.map((entry) => {
            console.log(entry.path + "\n");
        });
    });
});

