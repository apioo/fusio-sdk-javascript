import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/src/Client.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'http://127.0.0.1/projects/fusio/public/index.php',
        new OAuth2('test', 'test1234', 'http://127.0.0.1/projects/fusio/public/index.php/authorization/token', '')
    );

    let config = {
        response: JSON.stringify({hello: 'world'})
    };

    let create = {
        name: 'my-new-action',
        class: 'Fusio\\Adapter\\Util\\Action\\UtilStaticResponse',
        config: config
    };

    let response = await client.backend().action().create(create);

    console.log(response.message);
}

main();
