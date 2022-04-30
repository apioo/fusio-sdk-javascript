/**
 * BackendMarketplaceGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendMarketplaceByAppNameResource from "./BackendMarketplaceByAppNameResource";
import BackendMarketplaceResource from "./BackendMarketplaceResource";

export default class BackendMarketplaceGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/marketplace/:app_name
     *
     * @returns BackendMarketplaceByAppNameResource
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
     *
     * @returns BackendMarketplaceResource
     */
    public getBackendMarketplace(): BackendMarketplaceResource
    {
        return new BackendMarketplaceResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
