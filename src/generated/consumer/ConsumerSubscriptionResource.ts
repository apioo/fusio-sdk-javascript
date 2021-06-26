/**
 * ConsumerSubscriptionResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Event_Subscription_Collection} from "./Event_Subscription_Collection";
import {Event_Subscription_Create} from "./Event_Subscription_Create";
import {Message} from "./Message";

export default class ConsumerSubscriptionResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/subscription";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Event_Subscription_Collection>}
     */
    public consumerActionEventSubscriptionGetAll(query?: Collection_Query): AxiosPromise<Event_Subscription_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
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
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
