/**
 * BackendActionResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Action_Collection} from "./Action_Collection";
import {Action_Create} from "./Action_Create";
import {Message} from "./Message";

export default class BackendActionResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/action";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Action_Collection>}
     */
    public backendActionActionGetAll(query?: Collection_Category_Query): AxiosPromise<Action_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Action_Collection>(this.url, params);
    }

    /**
     * @param {Action_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionActionCreate(data?: Action_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
