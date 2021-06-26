/**
 * BackendEventSubscriptionBySubscriptionIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Event_Subscription} from "./Event_Subscription";
import {Event_Subscription_Update} from "./Event_Subscription_Update";
import {Message} from "./Message";

export default class BackendEventSubscriptionBySubscriptionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private subscription_id: string;

    public constructor(subscription_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.subscription_id = subscription_id;

        this.url = baseUrl + "/backend/event/subscription/"+subscription_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Event_Subscription>}
     */
    public backendActionEventSubscriptionGet(): AxiosPromise<Event_Subscription> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Event_Subscription>(this.url, params);
    }

    /**
     * @param {Event_Subscription_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventSubscriptionUpdate(data?: Event_Subscription_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventSubscriptionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
