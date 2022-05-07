/**
 * ConsumerSubscriptionBySubscriptionIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Event_Subscription} from "./Event_Subscription";
import {Event_Subscription_Update} from "./Event_Subscription_Update";
import {Message} from "./Message";

export default class ConsumerSubscriptionBySubscriptionIdResource extends ResourceAbstract {
    private url: string;

    private subscription_id: string;

    public constructor(subscription_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.subscription_id = subscription_id;

        this.url = baseUrl + "/consumer/subscription/"+subscription_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Event_Subscription>>}
     */
    public async consumerActionEventSubscriptionGet(): Promise<AxiosResponse<Event_Subscription>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Event_Subscription>(this.url, params);
    }

    /**
     * @param {Event_Subscription_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionEventSubscriptionUpdate(data: Event_Subscription_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionEventSubscriptionDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
