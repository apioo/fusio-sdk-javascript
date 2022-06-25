/**
 * ConsumerGrantResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Grant_Collection} from "./Grant_Collection";

export default class ConsumerGrantResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/grant";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Grant_Collection>>}
     */
    public async consumerActionGrantGetAll(query?: Collection_Query): Promise<AxiosResponse<Grant_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Grant_Collection>(this.url, params);
    }

}
