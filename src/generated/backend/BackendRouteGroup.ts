/**
 * BackendRouteGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendRoutesByRouteIdResource from "./BackendRoutesByRouteIdResource";
import BackendRoutesProviderByProviderResource from "./BackendRoutesProviderByProviderResource";
import BackendRoutesProviderResource from "./BackendRoutesProviderResource";
import BackendRoutesResource from "./BackendRoutesResource";

export default class BackendRouteGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/routes/$route_id<[0-9]+>
     *
     * @returns BackendRoutesByRouteIdResource
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
     * Endpoint: /backend/routes/provider/:provider
     *
     * @returns BackendRoutesProviderByProviderResource
     */
    public getBackendRoutesProviderByProvider(provider: string): BackendRoutesProviderByProviderResource
    {
        return new BackendRoutesProviderByProviderResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/routes/provider
     *
     * @returns BackendRoutesProviderResource
     */
    public getBackendRoutesProvider(): BackendRoutesProviderResource
    {
        return new BackendRoutesProviderResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/routes
     *
     * @returns BackendRoutesResource
     */
    public getBackendRoutes(): BackendRoutesResource
    {
        return new BackendRoutesResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
