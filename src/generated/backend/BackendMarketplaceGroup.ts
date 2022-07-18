/**
 * BackendMarketplaceGroup generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendMarketplaceByAppNameResource from "./BackendMarketplaceByAppNameResource";
import BackendMarketplaceResource from "./BackendMarketplaceResource";

export default class BackendMarketplaceGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/marketplace/:app_name
     */
    public getBackendMarketplaceByAppName(app_name: string): BackendMarketplaceByAppNameResource
    {
        return new BackendMarketplaceByAppNameResource(
            app_name,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/marketplace
     */
    public getBackendMarketplace(): BackendMarketplaceResource
    {
        return new BackendMarketplaceResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
