/**
 * BackendLogErrorResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log_Error_Collection} from "./Log_Error_Collection";

export default class BackendLogErrorResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/log/error";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Log_Error_Collection>>}
     */
    public async backendActionLogErrorGetAll(query?: Collection_Query): Promise<AxiosResponse<Log_Error_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Log_Error_Collection>(this.url, params);
    }

}
