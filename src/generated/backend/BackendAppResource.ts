/**
 * BackendAppResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {App_Collection} from "./App_Collection";
import {App_Create} from "./App_Create";
import {Message} from "./Message";

export default class BackendAppResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/app";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<App_Collection>}
     */
    public backendActionAppGetAll(query?: Collection_Query): AxiosPromise<App_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Collection>(this.url, params);
    }

    /**
     * @param {App_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAppCreate(data?: App_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
