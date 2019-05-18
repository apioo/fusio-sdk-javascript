import * as Token from "../../gen/consumer_token";
import {BaseResource} from "../BaseResource";

export class TokenResource extends BaseResource
{
    public do()
    {
        return new Token.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}