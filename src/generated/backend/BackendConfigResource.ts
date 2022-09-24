/**
 * BackendConfigResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {CollectionQuery} from "./CollectionQuery";
import {ConfigCollection} from "./ConfigCollection";

export default class BackendConfigResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/config";
    }

    /**
     * @param {CollectionQuery} query
     * @returns {Promise<AxiosResponse<ConfigCollection>>}
     */
    public async backendActionConfigGetAll(query?: CollectionQuery): Promise<AxiosResponse<ConfigCollection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<ConfigCollection>(this.url, params);
    }

}
