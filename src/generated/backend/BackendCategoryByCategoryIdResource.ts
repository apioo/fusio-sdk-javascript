/**
 * BackendCategoryByCategoryIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Category} from "./Category";
import {Category_Update} from "./Category_Update";
import {Message} from "./Message";

export default class BackendCategoryByCategoryIdResource extends ResourceAbstract {
    private url: string;

    private category_id: string;

    public constructor(category_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.category_id = category_id;

        this.url = baseUrl + "/backend/category/"+category_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Category>>}
     */
    public async backendActionCategoryGet(): Promise<AxiosResponse<Category>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Category>(this.url, params);
    }

    /**
     * @param {Category_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCategoryUpdate(data: Category_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCategoryDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
