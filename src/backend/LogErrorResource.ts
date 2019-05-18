import * as LogErrorCollection from "../../gen/backend_log_error";
import * as LogErrorEntity from "../../gen/backend_log_error__error_id__0_9___";
import {BaseResource} from "../BaseResource";

export class LogErrorResource extends BaseResource
{
    public collection()
    {
        return new LogErrorCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new LogErrorEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
