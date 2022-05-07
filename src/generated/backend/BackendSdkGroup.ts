/**
 * BackendSdkGroup generated on 2022-05-07
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
