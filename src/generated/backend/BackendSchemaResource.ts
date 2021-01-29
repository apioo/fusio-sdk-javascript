/**
 * BackendSchemaResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Schema_Collection} from "./Schema_Collection";
import {Schema_Create} from "./Schema_Create";
import {Message} from "./Message";

export default class BackendSchemaResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/schema";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Schema_Collection>}
     */
    public backendActionSchemaGetAll(query?: Collection_Category_Query): AxiosPromise<Schema_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Schema_Collection>(this.url, params);
    }

    /**
     * @param {Schema_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaCreate(data?: Schema_Create): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
