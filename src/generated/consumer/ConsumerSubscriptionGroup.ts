/**
 * ConsumerSubscriptionGroup generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerSubscriptionBySubscriptionIdResource from "./ConsumerSubscriptionBySubscriptionIdResource";
import ConsumerSubscriptionResource from "./ConsumerSubscriptionResource";

export default class ConsumerSubscriptionGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/subscription/$subscription_id<[0-9]+>
     */
    public getConsumerSubscriptionBySubscriptionId(subscription_id: string): ConsumerSubscriptionBySubscriptionIdResource
    {
        return new ConsumerSubscriptionBySubscriptionIdResource(
            subscription_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/subscription
     */
    public getConsumerSubscription(): ConsumerSubscriptionResource
    {
        return new ConsumerSubscriptionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}