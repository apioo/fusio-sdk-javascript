/**
 * BackendAccountGroup generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendAccountChangePasswordResource from "./BackendAccountChangePasswordResource";
import BackendAccountResource from "./BackendAccountResource";

export default class BackendAccountGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/account/change_password
     */
    public getBackendAccountChangePassword(): BackendAccountChangePasswordResource
    {
        return new BackendAccountChangePasswordResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/account
     */
    public getBackendAccount(): BackendAccountResource
    {
        return new BackendAccountResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
