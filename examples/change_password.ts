import {Authenticator} from "../src/Authenticator";
import Client from "../src/generated/consumer/Client";
import {Account_ChangePassword} from "../src/generated/consumer/Account_ChangePassword";

// @TODO set correct base uri
let baseUri = 'http://127.0.0.1/projects/fusio/public/index.php';

// request access token
let authenticator = new Authenticator(baseUri);
authenticator.requestAccessToken('test', 'test1234').then((response) => {
    console.log('Obtained token: ' + response.data.access_token + "\n");

    // changes the password of the user assigned to the token
    let client = new Client(baseUri, response.data.access_token);

    let changePassword: Account_ChangePassword = {
        oldPassword: 'test1234',
        newPassword: 'test1234!',
        verifyPassword: 'test1234!'
    };

    client.getConsumerAccountChangePassword().consumerActionUserChangePassword(changePassword).then((response) => {
        if (!response.data.message) {
            return;
        }

        console.log(response.data.message);
    });
});

