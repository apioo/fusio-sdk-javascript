/**
 * BackendLogByLogIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Log} from "./Log";

export default class BackendLogByLogIdResource extends ResourceAbstract {
    private url: string;

    private log_id: string;

    public constructor(log_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.log_id = log_id;

        this.url = baseUrl + "/backend/log/"+log_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Log>>}
     */
    public async backendActionLogGet(): Promise<AxiosResponse<Log>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}
