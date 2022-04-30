/**
 * BackendDashboardGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendDashboardResource from "./BackendDashboardResource";

export default class BackendDashboardGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/dashboard
     *
     * @returns BackendDashboardResource
     */
    public getBackendDashboard(): BackendDashboardResource
    {
        return new BackendDashboardResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
