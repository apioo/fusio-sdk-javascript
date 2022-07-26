/**
 * BackendLogResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Log_Collection} from "./Log_Collection";

export default class BackendLogResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/log";
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {Promise<AxiosResponse<Log_Collection>>}
     */
    public async backendActionLogGetAll(query?: Backend_Log_Collection_Query): Promise<AxiosResponse<Log_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}
