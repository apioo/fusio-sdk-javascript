/**
 * BackendEventGroup generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendEventByEventIdResource from "./BackendEventByEventIdResource";
import BackendEventResource from "./BackendEventResource";
import BackendEventSubscriptionBySubscriptionIdResource from "./BackendEventSubscriptionBySubscriptionIdResource";
import BackendEventSubscriptionResource from "./BackendEventSubscriptionResource";

export default class BackendEventGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/event/$event_id<[0-9]+|^~>
     */
    public getBackendEventByEventId(event_id: string): BackendEventByEventIdResource
    {
        return new BackendEventByEventIdResource(
            event_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/event
     */
    public getBackendEvent(): BackendEventResource
    {
        return new BackendEventResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/event/subscription/$subscription_id<[0-9]+>
     */
    public getBackendEventSubscriptionBySubscriptionId(subscription_id: string): BackendEventSubscriptionBySubscriptionIdResource
    {
        return new BackendEventSubscriptionBySubscriptionIdResource(
            subscription_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/event/subscription
     */
    public getBackendEventSubscription(): BackendEventSubscriptionResource
    {
        return new BackendEventSubscriptionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
