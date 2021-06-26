/**
 * ConsumerEventResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Event_Collection} from "./Event_Collection";

export default class ConsumerEventResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/event";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Event_Collection>}
     */
    public consumerActionEventGetAll(query?: Collection_Query): AxiosPromise<Event_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

}
