/**
 * ConsumerScopeResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {CollectionQuery} from "./CollectionQuery";
import {ScopeCollection} from "./ScopeCollection";

export default class ConsumerScopeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/scope";
    }

    /**
     * @param {CollectionQuery} query
     * @returns {Promise<AxiosResponse<ScopeCollection>>}
     */
    public async consumerActionScopeGetAll(query?: CollectionQuery): Promise<AxiosResponse<ScopeCollection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<ScopeCollection>(this.url, params);
    }

}
