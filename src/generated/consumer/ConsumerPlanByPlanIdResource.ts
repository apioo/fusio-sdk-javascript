/**
 * ConsumerPlanByPlanIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Plan} from "./Plan";

export default class ConsumerPlanByPlanIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.plan_id = plan_id;

        this.url = baseUrl + "/consumer/plan/"+plan_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan>}
     */
    public consumerActionPlanGet(): AxiosPromise<Plan> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

}
