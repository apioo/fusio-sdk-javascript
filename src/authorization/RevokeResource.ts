import * as Revoke from "../../gen/authorization_revoke";
import {BaseResource} from "../BaseResource";

export class RevokeResource extends BaseResource
{
    public do()
    {
        return new Revoke.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
