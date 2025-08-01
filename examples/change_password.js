import {OAuth2} from "sdkgen-client";
import {Client} from "../dist/index.js";

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'https://demo.fusio-project.org',
        new OAuth2('test', 'FRsNh1zKCXlB', 'https://demo.fusio-project.org/authorization/token', '')
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
