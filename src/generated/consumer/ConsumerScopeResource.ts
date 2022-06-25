/**
 * ConsumerScopeResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Scope_Collection} from "./Scope_Collection";

export default class ConsumerScopeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/scope";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Scope_Collection>>}
     */
    public async consumerActionScopeGetAll(query?: Collection_Query): Promise<AxiosResponse<Scope_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

}
