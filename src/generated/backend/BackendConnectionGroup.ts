/**
 * BackendConnectionGroup generated on 2022-04-30
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
     *
     * @returns BackendConnectionByConnectionIdRedirectResource
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
     *
     * @returns BackendConnectionByConnectionIdResource
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
     *
     * @returns BackendConnectionFormResource
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
     *
     * @returns BackendConnectionListResource
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
     *
     * @returns BackendConnectionResource
     */
    public getBackendConnection(): BackendConnectionResource
    {
        return new BackendConnectionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
