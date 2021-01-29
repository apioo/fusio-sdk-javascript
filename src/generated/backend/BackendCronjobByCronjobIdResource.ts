/**
 * BackendCronjobByCronjobIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Cronjob} from "./Cronjob";
import {Cronjob_Update} from "./Cronjob_Update";
import {Message} from "./Message";

export default class BackendCronjobByCronjobIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private cronjob_id: string;

    public constructor(cronjob_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.cronjob_id = cronjob_id;

        this.url = baseUrl + "/backend/cronjob/"+cronjob_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Cronjob>}
     */
    public backendActionCronjobGet(): AxiosPromise<Cronjob> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Cronjob>(this.url, params);
    }

    /**
     * @param {Cronjob_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCronjobUpdate(data?: Cronjob_Update): AxiosPromise<Message> {
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
    public backendActionCronjobDelete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
