/**
 * BackendAppResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {App_Collection} from "./App_Collection";
import {App_Create} from "./App_Create";
import {Message} from "./Message";

export default class BackendAppResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/app";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<App_Collection>>}
     */
    public async backendActionAppGetAll(query?: Collection_Query): Promise<AxiosResponse<App_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<App_Collection>(this.url, params);
    }

    /**
     * @param {App_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionAppCreate(data: App_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
