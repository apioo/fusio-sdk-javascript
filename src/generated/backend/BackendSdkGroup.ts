/**
 * BackendSdkGroup generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendSdkResource from "./BackendSdkResource";

export default class BackendSdkGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/sdk
     */
    public getBackendSdk(): BackendSdkResource
    {
        return new BackendSdkResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
