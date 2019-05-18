import * as AppCollection from "../../gen/consumer_app";
import * as AppEntity from "../../gen/consumer_app__app_id__0_9___";
import {BaseResource} from "../BaseResource";

export class AppResource extends BaseResource
{
    public collection()
    {
        return new AppCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new AppEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
