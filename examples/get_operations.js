import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/src/Client.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'http://127.0.0.1/projects/fusio/public/index.php',
        new OAuth2('test', 'test1234', 'http://127.0.0.1/projects/fusio/public/index.php/authorization/token', '')
    );

    let response = await client.backend().operation().getAll();
    if (!response.entry) {
        return;
    }

    response.entry.map((entry) => {
        console.log(entry.httpPath + "\n");
    });
}

main();
