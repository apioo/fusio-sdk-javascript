/**
 * ConsumerLogByLogIdResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log} from "./Log";

export default class ConsumerLogByLogIdResource extends ResourceAbstract {
    private url: string;

    private log_id: string;

    public constructor(log_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.log_id = log_id;

        this.url = baseUrl + "/consumer/log/"+log_id+"";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Log>>}
     */
    public async consumerActionLogGet(query?: Collection_Query): Promise<AxiosResponse<Log>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
