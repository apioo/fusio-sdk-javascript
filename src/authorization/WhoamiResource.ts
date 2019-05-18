import * as Whoami from "../../gen/authorization_whoami";
import {BaseResource} from "../BaseResource";

export class WhoamiResource extends BaseResource
{
    public do()
    {
        return new Whoami.default(this.accessToken, this.httpClient);
    }
}
