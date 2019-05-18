import * as Token from "../../gen/consumer_token";
import {BaseResource} from "../BaseResource";

export class TokenResource extends BaseResource
{
    public do()
    {
        return new Token.default(this.accessToken, this.httpClient);
    }
}
