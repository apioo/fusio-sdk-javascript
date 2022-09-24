import Client from "../src/Client";
import {ActionConfig} from "../src/generated/backend/ActionConfig";
import {ActionCreate} from "../src/generated/backend/ActionCreate";

// @TODO set correct client credentials
let client = new Client(
    'http://127.0.0.1/projects/fusio/public/index.php',
    'test',
    'test1234'
);

client.backend().getBackendAction().then(async (resource) => {
    let config: ActionConfig = {
        response: JSON.stringify({hello: 'world'})
    };

    let create: ActionCreate = {
        name: 'my-new-action',
        class: 'Fusio\\Adapter\\Util\\Action\\UtilStaticResponse',
        config: config
    };

    let response = await resource.backendActionActionCreate(create);
    if (!response.data.message) {
        return;
    }

    console.log(response.data.message);
})
