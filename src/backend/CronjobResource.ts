import * as CronjobCollection from "../../gen/backend_cronjob";
import * as CronjobEntity from "../../gen/backend_cronjob__cronjob_id__0_9___";
import {BaseResource} from "../BaseResource";

export class CronjobResource extends BaseResource
{
    public collection()
    {
        return new CronjobCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new CronjobEntity.default(id, this.accessToken, this.httpClient);
    }
}
