/**
 * BackendConnectionGroup generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendConnectionByConnectionIdIntrospectionAndEntityResource from "./BackendConnectionByConnectionIdIntrospectionAndEntityResource";
import BackendConnectionByConnectionIdIntrospectionResource from "./BackendConnectionByConnectionIdIntrospectionResource";
import BackendConnectionByConnectionIdRedirectResource from "./BackendConnectionByConnectionIdRedirectResource";
import BackendConnectionByConnectionIdResource from "./BackendConnectionByConnectionIdResource";
import BackendConnectionFormResource from "./BackendConnectionFormResource";
import BackendConnectionListResource from "./BackendConnectionListResource";
import BackendConnectionResource from "./BackendConnectionResource";

export default class BackendConnectionGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>/introspection/:entity
     */
    public getBackendConnectionByConnectionIdIntrospectionAndEntity(connection_id: string, entity: string): BackendConnectionByConnectionIdIntrospectionAndEntityResource
    {
        return new BackendConnectionByConnectionIdIntrospectionAndEntityResource(
            connection_id,
            entity,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>/introspection
     */
    public getBackendConnectionByConnectionIdIntrospection(connection_id: string): BackendConnectionByConnectionIdIntrospectionResource
    {
        return new BackendConnectionByConnectionIdIntrospectionResource(
            connection_id,
            this.baseUrl,
            this.httpClient
        );
    }

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
