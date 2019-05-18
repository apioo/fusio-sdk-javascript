import * as Account from "../../gen/consumer_account";
import * as ChangePassword from "../../gen/consumer_account_change_password";
import {BaseResource} from "../BaseResource";

export class AccountResource extends BaseResource
{
    public entity()
    {
        return new Account.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public changePassword()
    {
        return new ChangePassword.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
