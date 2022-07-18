/**
 * BackendStatisticTimeAverageResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Statistic_Chart} from "./Statistic_Chart";

export default class BackendStatisticTimeAverageResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/time_average";
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {Promise<AxiosResponse<Statistic_Chart>>}
     */
    public async backendActionStatisticGetTimeAverage(query?: Backend_Log_Collection_Query): Promise<AxiosResponse<Statistic_Chart>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Statistic_Chart>(this.url, params);
    }

}
