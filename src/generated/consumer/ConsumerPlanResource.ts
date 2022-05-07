/**
 * ConsumerPlanResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Collection} from "./Plan_Collection";

export default class ConsumerPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Collection>>}
     */
    public async consumerActionPlanGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

}
