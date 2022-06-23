/**
 * BackendStatisticUsedPointsResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Plan_Usage_Collection_Query} from "./Backend_Plan_Usage_Collection_Query";
import {Statistic_Count} from "./Statistic_Count";

export default class BackendStatisticUsedPointsResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/used_points";
    }

    /**
     * @param {Backend_Plan_Usage_Collection_Query} query
     * @returns {Promise<AxiosResponse<Statistic_Count>>}
     */
    public async backendActionStatisticGetUsedPoints(query?: Backend_Plan_Usage_Collection_Query): Promise<AxiosResponse<Statistic_Count>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}
