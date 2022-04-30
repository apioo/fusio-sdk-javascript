import Client from "../src/Client";
import {Action_Config} from "../src/generated/backend/Action_Config";
import {Action_Create} from "../src/generated/backend/Action_Create";

// @TODO set correct client credentials
let client = new Client(
    'http://127.0.0.1/projects/fusio/public/index.php',
    'test',
    'test1234'
);

client.backend().backendAction().then(async (backend) => {
    let config: Action_Config = {
        response: JSON.stringify({hello: 'world'})
    };

    let create: Action_Create = {
        name: 'my-new-action',
        class: 'Fusio\\Adapter\\Util\\Action\\UtilStaticResponse',
        config: config
    };

    let response = await backend.getBackendAction().backendActionActionCreate(create);
    if (!response.data.message) {
        return;
    }

    console.log(response.data.message);
})
