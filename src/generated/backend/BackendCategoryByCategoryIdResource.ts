/**
 * BackendCategoryByCategoryIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Category} from "./Category";
import {Category_Update} from "./Category_Update";
import {Message} from "./Message";

export default class BackendCategoryByCategoryIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private category_id: string;

    public constructor(category_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.category_id = category_id;

        this.url = baseUrl + "/backend/category/"+category_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Category>}
     */
    public backendActionCategoryGet(): AxiosPromise<Category> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Category>(this.url, params);
    }

    /**
     * @param {Category_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryUpdate(data?: Category_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
