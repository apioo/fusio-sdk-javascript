/**
 * ConsumerSubscriptionResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Event_Subscription_Collection} from "./Event_Subscription_Collection";
import {Event_Subscription_Create} from "./Event_Subscription_Create";
import {Message} from "./Message";

export default class ConsumerSubscriptionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/subscription";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Event_Subscription_Collection>>}
     */
    public async consumerActionEventSubscriptionGetAll(query?: Collection_Query): Promise<AxiosResponse<Event_Subscription_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Event_Subscription_Collection>(this.url, params);
    }

    /**
     * @param {Event_Subscription_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionEventSubscriptionCreate(data: Event_Subscription_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
