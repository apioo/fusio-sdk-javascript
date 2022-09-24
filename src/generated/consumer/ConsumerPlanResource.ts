/**
 * ConsumerPlanResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {CollectionQuery} from "./CollectionQuery";
import {PlanCollection} from "./PlanCollection";

export default class ConsumerPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan";
    }

    /**
     * @param {CollectionQuery} query
     * @returns {Promise<AxiosResponse<PlanCollection>>}
     */
    public async consumerActionPlanGetAll(query?: CollectionQuery): Promise<AxiosResponse<PlanCollection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<PlanCollection>(this.url, params);
    }

}
