/**
 * ConsumerLogByLogIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {CollectionQuery} from "./CollectionQuery";
import {Log} from "./Log";

export default class ConsumerLogByLogIdResource extends ResourceAbstract {
    private url: string;

    private logId: string;

    public constructor(logId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.logId = logId;

        this.url = baseUrl + "/consumer/log/"+logId+"";
    }

    /**
     * @param {CollectionQuery} query
     * @returns {Promise<AxiosResponse<Log>>}
     */
    public async consumerActionLogGet(query?: CollectionQuery): Promise<AxiosResponse<Log>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
