/**
 * BackendSdkGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendSdkResource from "./BackendSdkResource";

export default class BackendSdkGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/sdk
     *
     * @returns BackendSdkResource
     */
    public getBackendSdk(): BackendSdkResource
    {
        return new BackendSdkResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
