/**
 * BackendPageResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Page_Collection} from "./Page_Collection";
import {Page_Create} from "./Page_Create";
import {Message} from "./Message";

export default class BackendPageResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/page";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Page_Collection>>}
     */
    public async backendActionPageGetAll(query?: Collection_Query): Promise<AxiosResponse<Page_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Page_Collection>(this.url, params);
    }

    /**
     * @param {Page_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPageCreate(data: Page_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}