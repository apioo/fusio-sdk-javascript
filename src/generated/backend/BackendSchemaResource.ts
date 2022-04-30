/**
 * BackendSchemaResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Schema_Collection} from "./Schema_Collection";
import {Schema_Create} from "./Schema_Create";
import {Message} from "./Message";

export default class BackendSchemaResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/schema";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Schema_Collection>>}
     */
    public async backendActionSchemaGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Schema_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Schema_Collection>(this.url, params);
    }

    /**
     * @param {Schema_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionSchemaCreate(data?: Schema_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
