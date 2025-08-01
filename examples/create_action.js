import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/index.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'https://demo.fusio-project.org',
        new OAuth2('test', 'FRsNh1zKCXlB', 'https://demo.fusio-project.org/authorization/token', '')
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
