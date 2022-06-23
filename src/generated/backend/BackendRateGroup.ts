/**
 * BackendRateGroup generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendRateByRateIdResource from "./BackendRateByRateIdResource";
import BackendRateResource from "./BackendRateResource";

export default class BackendRateGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/rate/$rate_id<[0-9]+|^~>
     */
    public getBackendRateByRateId(rate_id: string): BackendRateByRateIdResource
    {
        return new BackendRateByRateIdResource(
            rate_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/rate
     */
    public getBackendRate(): BackendRateResource
    {
        return new BackendRateResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
