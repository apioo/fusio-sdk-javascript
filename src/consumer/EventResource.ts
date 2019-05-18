import * as EventCollection from "../../gen/consumer_event";
import {BaseResource} from "../BaseResource";

export class EventResource extends BaseResource
{
    public collection()
    {
        return new EventCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
