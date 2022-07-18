/**
 * BackendRouteGroup generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendRoutesByRouteIdResource from "./BackendRoutesByRouteIdResource";
import BackendRoutesResource from "./BackendRoutesResource";

export default class BackendRouteGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/routes/$route_id<[0-9]+>
     */
    public getBackendRoutesByRouteId(route_id: string): BackendRoutesByRouteIdResource
    {
        return new BackendRoutesByRouteIdResource(
            route_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/routes
     */
    public getBackendRoutes(): BackendRoutesResource
    {
        return new BackendRoutesResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
