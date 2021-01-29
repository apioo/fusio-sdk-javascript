/**
 * BackendEventResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Event_Collection} from "./Event_Collection";
import {Event_Create} from "./Event_Create";
import {Message} from "./Message";

export default class BackendEventResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/event";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Event_Collection>}
     */
    public backendActionEventGetAll(query?: Collection_Category_Query): AxiosPromise<Event_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

    /**
     * @param {Event_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventCreate(data?: Event_Create): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
