/**
 * BackendStatisticTimeAverageResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Statistic_Count} from "./Statistic_Count";

export default class BackendStatisticTimeAverageResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/statistic/time_average";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {AxiosPromise<Statistic_Count>}
     */
    public backendActionStatisticGetTimeAverage(query?: Backend_Log_Collection_Query): AxiosPromise<Statistic_Count> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}
