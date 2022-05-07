/**
 * BackendStatisticCountRequestsResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Statistic_Count} from "./Statistic_Count";

export default class BackendStatisticCountRequestsResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/count_requests";
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {Promise<AxiosResponse<Statistic_Count>>}
     */
    public async backendActionStatisticGetCountRequests(query?: Backend_Log_Collection_Query): Promise<AxiosResponse<Statistic_Count>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}
