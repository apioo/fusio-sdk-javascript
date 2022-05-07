/**
 * BackendEventResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Event_Collection} from "./Event_Collection";
import {Event_Create} from "./Event_Create";
import {Message} from "./Message";

export default class BackendEventResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/event";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Event_Collection>>}
     */
    public async backendActionEventGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Event_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

    /**
     * @param {Event_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionEventCreate(data: Event_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
