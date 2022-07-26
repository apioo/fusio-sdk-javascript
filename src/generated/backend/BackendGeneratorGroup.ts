/**
 * BackendGeneratorGroup generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendGeneratorByProviderResource from "./BackendGeneratorByProviderResource";
import BackendGeneratorResource from "./BackendGeneratorResource";

export default class BackendGeneratorGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/generator/:provider
     */
    public getBackendGeneratorByProvider(provider: string): BackendGeneratorByProviderResource
    {
        return new BackendGeneratorByProviderResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/generator
     */
    public getBackendGenerator(): BackendGeneratorResource
    {
        return new BackendGeneratorResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
