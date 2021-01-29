import {Authenticator} from "../src/Authenticator";
import Client from "../src/generated/backend/Client";
import {Action_Config} from "../src/generated/backend/Action_Config";
import {Action_Create} from "../src/generated/backend/Action_Create";

// @TODO set correct base uri
let baseUri = 'http://127.0.0.1/projects/fusio/public/index.php';

// request access token
let authenticator = new Authenticator(baseUri);
authenticator.requestAccessToken('test', 'test1234').then((response) => {
    console.log('Obtained token: ' + response.data.access_token + "\n");

    // create a new action which can be used at a route
    let client = new Client(baseUri, response.data.access_token);

    let config: Action_Config = {
        response: JSON.stringify({hello: 'world'})
    };
    
    let create: Action_Create = {
        name: 'my-new-action',
        class: 'Fusio\\Adapter\\Util\\Action\\UtilStaticResponse',
        config: config
    };

    client.getBackendAction().backendActionActionCreate(create).then((response) => {
        if (!response.data.message) {
            return;
        }

        console.log(response.data.message);
    });
});

