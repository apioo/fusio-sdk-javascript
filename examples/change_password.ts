import Client from "../src/Client";
import {Account_ChangePassword} from "../src/generated/consumer/Account_ChangePassword";

// @TODO set correct client credentials
let client = new Client(
    'http://127.0.0.1/projects/fusio/public/index.php',
    'test',
    'test1234'
);

client.consumer().then(async (consumer) => {
    let changePassword: Account_ChangePassword = {
        oldPassword: 'test1234',
        newPassword: 'test1234!',
        verifyPassword: 'test1234!'
    };

    let response = await consumer.getConsumerAccountChangePassword().consumerActionUserChangePassword(changePassword);
    if (!response.data.message) {
        return;
    }

    console.log(response.data.message);
})
