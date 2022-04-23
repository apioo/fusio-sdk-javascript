/**
 * BackendLogByLogIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Log} from "./Log";

export default class BackendLogByLogIdResource extends ResourceAbstract {
    private url: string;

    private log_id: string;

    public constructor(log_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.log_id = log_id;

        this.url = baseUrl + "/backend/log/"+log_id+"";
    }

    /**
     * @returns {AxiosPromise<Log>}
     */
    public backendActionLogGet(): AxiosPromise<Log> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
