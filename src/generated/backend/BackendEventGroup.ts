/**
 * BackendEventGroup generated on 2022-04-30
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
     *
     * @returns BackendEventByEventIdResource
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
     *
     * @returns BackendEventResource
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
     *
     * @returns BackendEventSubscriptionBySubscriptionIdResource
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
     *
     * @returns BackendEventSubscriptionResource
     */
    public getBackendEventSubscription(): BackendEventSubscriptionResource
    {
        return new BackendEventSubscriptionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
