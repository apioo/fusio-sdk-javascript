/**
 * BackendPlanResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Plan_Collection} from "./Plan_Collection";
import {Plan_Create} from "./Plan_Create";
import {Message} from "./Message";

export default class BackendPlanResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/plan";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Collection>}
     */
    public backendActionPlanGetAll(query?: Collection_Query): AxiosPromise<Plan_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanCreate(data?: Plan_Create): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
