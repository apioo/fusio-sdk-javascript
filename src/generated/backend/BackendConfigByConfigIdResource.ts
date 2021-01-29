/**
 * BackendConfigByConfigIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Config} from "./Config";
import {Config_Update} from "./Config_Update";
import {Message} from "./Message";

export default class BackendConfigByConfigIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private config_id: string;

    public constructor(config_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.config_id = config_id;

        this.url = baseUrl + "/backend/config/"+config_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Config>}
     */
    public backendActionConfigGet(): AxiosPromise<Config> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Config>(this.url, params);
    }

    /**
     * @param {Config_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConfigUpdate(data?: Config_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
