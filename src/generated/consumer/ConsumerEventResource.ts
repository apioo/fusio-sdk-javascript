/**
 * ConsumerEventResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Event_Collection} from "./Event_Collection";

export default class ConsumerEventResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/event";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Event_Collection>>}
     */
    public async consumerActionEventGetAll(query?: Collection_Query): Promise<AxiosResponse<Event_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

}
