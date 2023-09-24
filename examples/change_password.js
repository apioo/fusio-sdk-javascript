import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/src/Client.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'http://127.0.0.1/projects/fusio/public/index.php',
        new OAuth2('test', 'test1234', 'http://127.0.0.1/projects/fusio/public/index.php/authorization/token', '')
    );

    let changePassword = {
        oldPassword: 'test1234',
        newPassword: 'test1234!',
        verifyPassword: 'test1234!'
    };

    let response = await client.consumer().account().changePassword(changePassword);

    console.log(response.message);
}

main();
