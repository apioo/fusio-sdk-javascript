/**
 * ConsumerSubscriptionBySubscriptionIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Event_Subscription} from "./Event_Subscription";
import {Event_Subscription_Update} from "./Event_Subscription_Update";
import {Message} from "./Message";

export default class ConsumerSubscriptionBySubscriptionIdResource extends ResourceAbstract {
    private url: string;

    private subscription_id: string;

    public constructor(subscription_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.subscription_id = subscription_id;

        this.url = baseUrl + "/consumer/subscription/"+subscription_id+"";
    }

    /**
     * @returns {AxiosPromise<Event_Subscription>}
     */
    public consumerActionEventSubscriptionGet(): AxiosPromise<Event_Subscription> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Event_Subscription>(this.url, params);
    }

    /**
     * @param {Event_Subscription_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionEventSubscriptionUpdate(data?: Event_Subscription_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionEventSubscriptionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
