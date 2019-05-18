import * as Login from "../../gen/consumer_login";
import {BaseResource} from "../BaseResource";

export class LoginResource extends BaseResource
{
    public do()
    {
        return new Login.default(this.accessToken, this.httpClient);
    }
}
