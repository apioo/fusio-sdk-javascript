/**
 * BackendRoutesResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Route_Collection} from "./Route_Collection";
import {Route_Create} from "./Route_Create";
import {Message} from "./Message";

export default class BackendRoutesResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/routes";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Route_Collection>}
     */
    public backendActionRouteGetAll(query?: Collection_Category_Query): AxiosPromise<Route_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Route_Collection>(this.url, params);
    }

    /**
     * @param {Route_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteCreate(data?: Route_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
