/**
 * ConsumerSubscriptionBySubscriptionIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {EventSubscription} from "./EventSubscription";
import {EventSubscriptionUpdate} from "./EventSubscriptionUpdate";
import {Message} from "./Message";

export default class ConsumerSubscriptionBySubscriptionIdResource extends ResourceAbstract {
    private url: string;

    private subscriptionId: string;

    public constructor(subscriptionId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.subscriptionId = subscriptionId;

        this.url = baseUrl + "/consumer/subscription/"+subscriptionId+"";
    }

    /**
     * @returns {Promise<AxiosResponse<EventSubscription>>}
     */
    public async consumerActionEventSubscriptionGet(): Promise<AxiosResponse<EventSubscription>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<EventSubscription>(this.url, params);
    }

    /**
     * @param {EventSubscriptionUpdate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionEventSubscriptionUpdate(data: EventSubscriptionUpdate): Promise<AxiosResponse<Message>> {
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
