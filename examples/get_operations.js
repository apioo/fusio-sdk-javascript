import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/index.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'https://demo.fusio-project.org',
        new OAuth2('test', 'FRsNh1zKCXlB', 'https://demo.fusio-project.org/authorization/token', '')
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
