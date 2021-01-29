/**
 * BackendLogByLogIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Log} from "./Log";

export default class BackendLogByLogIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private log_id: string;

    public constructor(log_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.log_id = log_id;

        this.url = baseUrl + "/backend/log/"+log_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Log>}
     */
    public backendActionLogGet(): AxiosPromise<Log> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
