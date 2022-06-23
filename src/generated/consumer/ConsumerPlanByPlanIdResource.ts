/**
 * ConsumerPlanByPlanIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan} from "./Plan";

export default class ConsumerPlanByPlanIdResource extends ResourceAbstract {
    private url: string;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.plan_id = plan_id;

        this.url = baseUrl + "/consumer/plan/"+plan_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan>>}
     */
    public async consumerActionPlanGet(): Promise<AxiosResponse<Plan>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

}
