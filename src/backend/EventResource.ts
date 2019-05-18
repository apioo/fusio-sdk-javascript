import * as EventCollection from "../../gen/backend_event";
import * as EventEntity from "../../gen/backend_event__event_id__0_9___";
import {BaseResource} from "../BaseResource";

export class EventResource extends BaseResource
{
    public collection()
    {
        return new EventCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new EventEntity.default(id, this.accessToken, this.httpClient);
    }
}
