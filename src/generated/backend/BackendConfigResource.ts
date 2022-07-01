/**
 * BackendConfigResource generated on 2022-07-01
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Config_Collection} from "./Config_Collection";

export default class BackendConfigResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/config";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Config_Collection>>}
     */
    public async backendActionConfigGetAll(query?: Collection_Query): Promise<AxiosResponse<Config_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Config_Collection>(this.url, params);
    }

}
