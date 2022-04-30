/**
 * ConsumerLogByLogIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log} from "./Log";

export default class ConsumerLogByLogIdResource extends ResourceAbstract {
    private url: string;

    private log_id: string;

    public constructor(log_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.log_id = log_id;

        this.url = baseUrl + "/consumer/log/"+log_id+"";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Log>}
     */
    public consumerActionLogGet(query?: Collection_Query): AxiosPromise<Log> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
