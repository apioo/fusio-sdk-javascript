import * as Register from "../../gen/consumer_register";
import {BaseResource} from "../BaseResource";

export class RegisterResource extends BaseResource
{
    public do()
    {
        return new Register.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
