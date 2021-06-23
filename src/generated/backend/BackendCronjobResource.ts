/**
 * BackendCronjobResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Cronjob_Collection} from "./Cronjob_Collection";
import {Cronjob_Create} from "./Cronjob_Create";
import {Message} from "./Message";

export default class BackendCronjobResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/cronjob";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Cronjob_Collection>}
     */
    public backendActionCronjobGetAll(query?: Collection_Category_Query): AxiosPromise<Cronjob_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Cronjob_Collection>(this.url, params);
    }

    /**
     * @param {Cronjob_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCronjobCreate(data?: Cronjob_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
