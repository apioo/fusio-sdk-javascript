/**
 * BackendUserGroup generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendUserByUserIdResource from "./BackendUserByUserIdResource";
import BackendUserResource from "./BackendUserResource";

export default class BackendUserGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/user/$user_id<[0-9]+>
     */
    public getBackendUserByUserId(user_id: string): BackendUserByUserIdResource
    {
        return new BackendUserByUserIdResource(
            user_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/user
     */
    public getBackendUser(): BackendUserResource
    {
        return new BackendUserResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
