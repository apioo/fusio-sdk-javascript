/**
 * BackendCategoryGroup generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendCategoryByCategoryIdResource from "./BackendCategoryByCategoryIdResource";
import BackendCategoryResource from "./BackendCategoryResource";

export default class BackendCategoryGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/category/$category_id<[0-9]+|^~>
     */
    public getBackendCategoryByCategoryId(category_id: string): BackendCategoryByCategoryIdResource
    {
        return new BackendCategoryByCategoryIdResource(
            category_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/category
     */
    public getBackendCategory(): BackendCategoryResource
    {
        return new BackendCategoryResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
