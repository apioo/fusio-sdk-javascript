import Client from "../src/Client";
import {ActionConfig} from "../src/generated/backend/ActionConfig";
import {ActionCreate} from "../src/generated/backend/ActionCreate";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'http://127.0.0.1/projects/fusio/public/index.php',
        'test',
        'test1234'
    );

    let config: ActionConfig = {
        response: JSON.stringify({hello: 'world'})
    };

    let create: ActionCreate = {
        name: 'my-new-action',
        class: 'Fusio\\Adapter\\Util\\Action\\UtilStaticResponse',
        config: config
    };

    let response = await client.backend().action().create(create);

    console.log(response.message);
}

main();
