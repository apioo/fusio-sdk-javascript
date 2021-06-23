/**
 * ConsumerAuthorizeResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Authorize_Meta} from "./Authorize_Meta";
import {Authorize_Request} from "./Authorize_Request";
import {Authorize_Response} from "./Authorize_Response";

export default class ConsumerAuthorizeResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/authorize";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Authorize_Meta>}
     */
    public consumerActionUserGetApp(): AxiosPromise<Authorize_Meta> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Authorize_Meta>(this.url, params);
    }

    /**
     * @param {Authorize_Request} data
     * @returns {AxiosPromise<Authorize_Response>}
     */
    public consumerActionUserAuthorize(data?: Authorize_Request): AxiosPromise<Authorize_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Authorize_Response>(this.url, data, params);
    }

}
