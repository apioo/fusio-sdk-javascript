/**
 * BackendLogErrorByErrorIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Log_Error} from "./Log_Error";

export default class BackendLogErrorByErrorIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private error_id: string;

    public constructor(error_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.error_id = error_id;

        this.url = baseUrl + "/backend/log/error/"+error_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Log_Error>}
     */
    public backendActionLogErrorGet(): AxiosPromise<Log_Error> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log_Error>(this.url, params);
    }

}
