import * as LogCollection from "../../gen/backend_log";
import * as LogEntity from "../../gen/backend_log__log_id__0_9___";
import {BaseResource} from "../BaseResource";

export class LogResource extends BaseResource
{
    public collection()
    {
        return new LogCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new LogEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
