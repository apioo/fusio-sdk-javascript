/**
 * BackendConnectionResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Connection_Collection} from "./Connection_Collection";
import {Connection_Create} from "./Connection_Create";
import {Message} from "./Message";

export default class BackendConnectionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Connection_Collection>>}
     */
    public async backendActionConnectionGetAll(query?: Collection_Query): Promise<AxiosResponse<Connection_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Connection_Collection>(this.url, params);
    }

    /**
     * @param {Connection_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionCreate(data: Connection_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
