import Client from "../src/Client";
import {AccountChangePassword} from "../src/generated/consumer/AccountChangePassword";

// @TODO set correct client credentials
let client = new Client(
    'http://127.0.0.1/projects/fusio/public/index.php',
    'test',
    'test1234'
);

client.consumer().getConsumerAccountChangePassword().then(async (resource) => {
    let changePassword: AccountChangePassword = {
        oldPassword: 'test1234',
        newPassword: 'test1234!',
        verifyPassword: 'test1234!'
    };

    let response = await resource.consumerActionUserChangePassword(changePassword);
    if (!response.data.message) {
        return;
    }

    console.log(response.data.message);
})
