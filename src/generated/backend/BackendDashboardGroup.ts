/**
 * BackendDashboardGroup generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendDashboardResource from "./BackendDashboardResource";

export default class BackendDashboardGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/dashboard
     */
    public getBackendDashboard(): BackendDashboardResource
    {
        return new BackendDashboardResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
