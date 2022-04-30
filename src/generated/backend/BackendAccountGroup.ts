/**
 * BackendAccountGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendAccountChangePasswordResource from "./BackendAccountChangePasswordResource";
import BackendAccountResource from "./BackendAccountResource";

export default class BackendAccountGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/account/change_password
     *
     * @returns BackendAccountChangePasswordResource
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
     *
     * @returns BackendAccountResource
     */
    public getBackendAccount(): BackendAccountResource
    {
        return new BackendAccountResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
