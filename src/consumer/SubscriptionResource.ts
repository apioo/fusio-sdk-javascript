import * as SubscriptionCollection from "../../gen/consumer_subscription";
import * as SubscriptionEntity
    from "../../gen/consumer_subscription__subscription_id__0_9___";
import {BaseResource} from "../BaseResource";

export class SubscriptionResource extends BaseResource
{
    public collection()
    {
        return new SubscriptionCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new SubscriptionEntity.default(id, this.accessToken, this.httpClient);
    }
}
