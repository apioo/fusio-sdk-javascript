/**
 * BackendRateResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Rate_Collection} from "./Rate_Collection";
import {Rate_Create} from "./Rate_Create";
import {Message} from "./Message";

export default class BackendRateResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/rate";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Rate_Collection>>}
     */
    public async backendActionRateGetAll(query?: Collection_Query): Promise<AxiosResponse<Rate_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Rate_Collection>(this.url, params);
    }

    /**
     * @param {Rate_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRateCreate(data: Rate_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
