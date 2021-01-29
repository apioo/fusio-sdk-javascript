/**
 * BackendRateByRateIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Rate} from "./Rate";
import {Rate_Update} from "./Rate_Update";
import {Message} from "./Message";

export default class BackendRateByRateIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private rate_id: string;

    public constructor(rate_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.rate_id = rate_id;

        this.url = baseUrl + "/backend/rate/"+rate_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Rate>}
     */
    public backendActionRateGet(): AxiosPromise<Rate> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Rate>(this.url, params);
    }

    /**
     * @param {Rate_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateUpdate(data?: Rate_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateDelete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
