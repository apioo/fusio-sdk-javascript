/**
 * BackendCategoryResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Category_Collection} from "./Category_Collection";
import {Category_Create} from "./Category_Create";
import {Message} from "./Message";

export default class BackendCategoryResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/category";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Category_Collection>}
     */
    public backendActionCategoryGetAll(query?: Collection_Query): AxiosPromise<Category_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Category_Collection>(this.url, params);
    }

    /**
     * @param {Category_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryCreate(data?: Category_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
