/**
 * BackendScopeResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Scope_Collection} from "./Scope_Collection";
import {Scope_Create} from "./Scope_Create";
import {Message} from "./Message";

export default class BackendScopeResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/scope";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Scope_Collection>}
     */
    public backendActionScopeGetAll(query?: Collection_Category_Query): AxiosPromise<Scope_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

    /**
     * @param {Scope_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeCreate(data?: Scope_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
