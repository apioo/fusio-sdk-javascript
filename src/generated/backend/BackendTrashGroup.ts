/**
 * BackendTrashGroup generated on 2022-07-01
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendTrashByTypeResource from "./BackendTrashByTypeResource";
import BackendTrashResource from "./BackendTrashResource";

export default class BackendTrashGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/trash/:type
     */
    public getBackendTrashByType(type: string): BackendTrashByTypeResource
    {
        return new BackendTrashByTypeResource(
            type,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/trash
     */
    public getBackendTrash(): BackendTrashResource
    {
        return new BackendTrashResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
