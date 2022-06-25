/**
 * ConsumerLogResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log_Collection} from "./Log_Collection";

export default class ConsumerLogResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/log";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Log_Collection>>}
     */
    public async consumerActionLogGetAll(query?: Collection_Query): Promise<AxiosResponse<Log_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}
