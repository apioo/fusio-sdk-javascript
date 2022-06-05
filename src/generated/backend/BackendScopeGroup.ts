/**
 * BackendScopeGroup generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendScopeByScopeIdResource from "./BackendScopeByScopeIdResource";
import BackendScopeCategoriesResource from "./BackendScopeCategoriesResource";
import BackendScopeResource from "./BackendScopeResource";

export default class BackendScopeGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/scope/$scope_id<[0-9]+|^~>
     */
    public getBackendScopeByScopeId(scope_id: string): BackendScopeByScopeIdResource
    {
        return new BackendScopeByScopeIdResource(
            scope_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/scope/categories
     */
    public getBackendScopeCategories(): BackendScopeCategoriesResource
    {
        return new BackendScopeCategoriesResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/scope
     */
    public getBackendScope(): BackendScopeResource
    {
        return new BackendScopeResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
