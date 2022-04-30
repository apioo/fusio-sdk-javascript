/**
 * ConsumerPlanByPlanIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan} from "./Plan";

export default class ConsumerPlanByPlanIdResource extends ResourceAbstract {
    private url: string;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.plan_id = plan_id;

        this.url = baseUrl + "/consumer/plan/"+plan_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan>}
     */
    public consumerActionPlanGet(): AxiosPromise<Plan> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

}
