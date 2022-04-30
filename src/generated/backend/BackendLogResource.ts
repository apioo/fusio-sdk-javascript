/**
 * BackendLogResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Log_Collection} from "./Log_Collection";

export default class BackendLogResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/log";
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {AxiosPromise<Log_Collection>}
     */
    public backendActionLogGetAll(query?: Backend_Log_Collection_Query): AxiosPromise<Log_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}
