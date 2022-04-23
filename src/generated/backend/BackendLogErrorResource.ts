/**
 * BackendLogErrorResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log_Error_Collection} from "./Log_Error_Collection";

export default class BackendLogErrorResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/log/error";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Log_Error_Collection>}
     */
    public backendActionLogErrorGetAll(query?: Collection_Query): AxiosPromise<Log_Error_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Log_Error_Collection>(this.url, params);
    }

}
