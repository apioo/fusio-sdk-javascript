/**
 * BackendLogResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Log_Collection} from "./Log_Collection";

export default class BackendLogResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/log";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {AxiosPromise<Log_Collection>}
     */
    public backendActionLogGetAll(query?: Backend_Log_Collection_Query): AxiosPromise<Log_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}
