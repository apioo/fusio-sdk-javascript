/**
 * BackendRoleResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Role_Collection} from "./Role_Collection";
import {Role_Create} from "./Role_Create";
import {Message} from "./Message";

export default class BackendRoleResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/role";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Role_Collection>}
     */
    public backendActionRoleGetAll(query?: Collection_Query): AxiosPromise<Role_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Role_Collection>(this.url, params);
    }

    /**
     * @param {Role_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRoleCreate(data?: Role_Create): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
