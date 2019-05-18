import * as ScopeCollection from "../../gen/consumer_scope";
import {BaseResource} from "../BaseResource";

export class ScopeResource extends BaseResource
{
    public collection()
    {
        return new ScopeCollection.default(this.accessToken, this.httpClient);
    }
}
