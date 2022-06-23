/**
 * ConsumerPageResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Page_Collection} from "./Page_Collection";

export default class ConsumerPageResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/page";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Page_Collection>>}
     */
    public async consumerActionPageGetAll(query?: Collection_Query): Promise<AxiosResponse<Page_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Page_Collection>(this.url, params);
    }

}
