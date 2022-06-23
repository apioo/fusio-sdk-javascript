/**
 * BackendConnectionGroup generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendConnectionByConnectionIdRedirectResource from "./BackendConnectionByConnectionIdRedirectResource";
import BackendConnectionByConnectionIdResource from "./BackendConnectionByConnectionIdResource";
import BackendConnectionFormResource from "./BackendConnectionFormResource";
import BackendConnectionListResource from "./BackendConnectionListResource";
import BackendConnectionResource from "./BackendConnectionResource";

export default class BackendConnectionGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>/redirect
     */
    public getBackendConnectionByConnectionIdRedirect(connection_id: string): BackendConnectionByConnectionIdRedirectResource
    {
        return new BackendConnectionByConnectionIdRedirectResource(
            connection_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>
     */
    public getBackendConnectionByConnectionId(connection_id: string): BackendConnectionByConnectionIdResource
    {
        return new BackendConnectionByConnectionIdResource(
            connection_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/connection/form
     */
    public getBackendConnectionForm(): BackendConnectionFormResource
    {
        return new BackendConnectionFormResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/connection/list
     */
    public getBackendConnectionList(): BackendConnectionListResource
    {
        return new BackendConnectionListResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/connection
     */
    public getBackendConnection(): BackendConnectionResource
    {
        return new BackendConnectionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
