/**
 * BackendStatisticMostUsedAppsResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {BackendLogCollectionQuery} from "./BackendLogCollectionQuery";
import {StatisticChart} from "./StatisticChart";

export default class BackendStatisticMostUsedAppsResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/most_used_apps";
    }

    /**
     * @param {BackendLogCollectionQuery} query
     * @returns {Promise<AxiosResponse<StatisticChart>>}
     */
    public async backendActionStatisticGetMostUsedApps(query?: BackendLogCollectionQuery): Promise<AxiosResponse<StatisticChart>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<StatisticChart>(this.url, params);
    }

}
