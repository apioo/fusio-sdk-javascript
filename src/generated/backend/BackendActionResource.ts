/**
 * BackendActionResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Action_Collection} from "./Action_Collection";
import {Action_Create} from "./Action_Create";
import {Message} from "./Message";

export default class BackendActionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/action";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Action_Collection>>}
     */
    public async backendActionActionGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Action_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Action_Collection>(this.url, params);
    }

    /**
     * @param {Action_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionActionCreate(data: Action_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
