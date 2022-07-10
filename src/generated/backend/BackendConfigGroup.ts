/**
 * BackendConfigGroup generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendConfigByConfigIdResource from "./BackendConfigByConfigIdResource";
import BackendConfigResource from "./BackendConfigResource";

export default class BackendConfigGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/config/$config_id<[0-9]+|^~>
     */
    public getBackendConfigByConfigId(config_id: string): BackendConfigByConfigIdResource
    {
        return new BackendConfigByConfigIdResource(
            config_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/config
     */
    public getBackendConfig(): BackendConfigResource
    {
        return new BackendConfigResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
