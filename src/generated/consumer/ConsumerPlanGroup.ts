/**
 * ConsumerPlanGroup generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPlanByPlanIdResource from "./ConsumerPlanByPlanIdResource";
import ConsumerPlanResource from "./ConsumerPlanResource";

export default class ConsumerPlanGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/plan/$plan_id<[0-9]+>
     */
    public getConsumerPlanByPlanId(plan_id: string): ConsumerPlanByPlanIdResource
    {
        return new ConsumerPlanByPlanIdResource(
            plan_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan
     */
    public getConsumerPlan(): ConsumerPlanResource
    {
        return new ConsumerPlanResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
