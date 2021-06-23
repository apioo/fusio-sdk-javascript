/**
 * BackendRateResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Rate_Collection} from "./Rate_Collection";
import {Rate_Create} from "./Rate_Create";
import {Message} from "./Message";

export default class BackendRateResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/rate";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Rate_Collection>}
     */
    public backendActionRateGetAll(query?: Collection_Query): AxiosPromise<Rate_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Rate_Collection>(this.url, params);
    }

    /**
     * @param {Rate_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateCreate(data?: Rate_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
