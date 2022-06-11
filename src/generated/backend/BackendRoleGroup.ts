/**
 * BackendRoleGroup generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendRoleByRoleIdResource from "./BackendRoleByRoleIdResource";
import BackendRoleResource from "./BackendRoleResource";

export default class BackendRoleGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/role/$role_id<[0-9]+|^~>
     */
    public getBackendRoleByRoleId(role_id: string): BackendRoleByRoleIdResource
    {
        return new BackendRoleByRoleIdResource(
            role_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/role
     */
    public getBackendRole(): BackendRoleResource
    {
        return new BackendRoleResource(
            this.baseUrl,
            this.httpClient
        );
    }

}