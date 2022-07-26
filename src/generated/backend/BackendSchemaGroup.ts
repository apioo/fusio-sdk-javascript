/**
 * BackendSchemaGroup generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendSchemaBySchemaIdResource from "./BackendSchemaBySchemaIdResource";
import BackendSchemaFormBySchemaIdResource from "./BackendSchemaFormBySchemaIdResource";
import BackendSchemaPreviewBySchemaIdResource from "./BackendSchemaPreviewBySchemaIdResource";
import BackendSchemaResource from "./BackendSchemaResource";

export default class BackendSchemaGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/schema/$schema_id<[0-9]+|^~>
     */
    public getBackendSchemaBySchemaId(schema_id: string): BackendSchemaBySchemaIdResource
    {
        return new BackendSchemaBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/schema/form/$schema_id<[0-9]+>
     */
    public getBackendSchemaFormBySchemaId(schema_id: string): BackendSchemaFormBySchemaIdResource
    {
        return new BackendSchemaFormBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/schema/preview/:schema_id
     */
    public getBackendSchemaPreviewBySchemaId(schema_id: string): BackendSchemaPreviewBySchemaIdResource
    {
        return new BackendSchemaPreviewBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/schema
     */
    public getBackendSchema(): BackendSchemaResource
    {
        return new BackendSchemaResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
