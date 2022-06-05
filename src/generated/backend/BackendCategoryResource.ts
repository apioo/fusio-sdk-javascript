/**
 * BackendCategoryResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Category_Collection} from "./Category_Collection";
import {Category_Create} from "./Category_Create";
import {Message} from "./Message";

export default class BackendCategoryResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/category";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Category_Collection>>}
     */
    public async backendActionCategoryGetAll(query?: Collection_Query): Promise<AxiosResponse<Category_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Category_Collection>(this.url, params);
    }

    /**
     * @param {Category_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCategoryCreate(data: Category_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
