/**
 * ConsumerSubscriptionResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Event_Subscription_Collection} from "./Event_Subscription_Collection";
import {Event_Subscription_Create} from "./Event_Subscription_Create";
import {Message} from "./Message";

export default class ConsumerSubscriptionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/subscription";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Event_Subscription_Collection>}
     */
    public consumerActionEventSubscriptionGetAll(query?: Collection_Query): AxiosPromise<Event_Subscription_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Event_Subscription_Collection>(this.url, params);
    }

    /**
     * @param {Event_Subscription_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionEventSubscriptionCreate(data?: Event_Subscription_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
