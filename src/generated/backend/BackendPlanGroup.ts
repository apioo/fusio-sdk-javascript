/**
 * BackendPlanGroup generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendPlanByPlanIdResource from "./BackendPlanByPlanIdResource";
import BackendPlanResource from "./BackendPlanResource";

export default class BackendPlanGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/plan/$plan_id<[0-9]+|^~>
     */
    public getBackendPlanByPlanId(plan_id: string): BackendPlanByPlanIdResource
    {
        return new BackendPlanByPlanIdResource(
            plan_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/plan
     */
    public getBackendPlan(): BackendPlanResource
    {
        return new BackendPlanResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
