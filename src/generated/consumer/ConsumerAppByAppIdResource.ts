/**
 * ConsumerAppByAppIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {App} from "./App";
import {App_Update} from "./App_Update";
import {Message} from "./Message";

export default class ConsumerAppByAppIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_id: string;

    public constructor(app_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_id = app_id;

        this.url = baseUrl + "/consumer/app/"+app_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<App>}
     */
    public consumerActionAppGet(): AxiosPromise<App> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App>(this.url, params);
    }

    /**
     * @param {App_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionAppUpdate(data?: App_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionAppDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
