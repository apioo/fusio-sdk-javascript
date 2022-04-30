/**
 * BackendPageGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendPageByPageIdResource from "./BackendPageByPageIdResource";
import BackendPageResource from "./BackendPageResource";

export default class BackendPageGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/page/$page_id<[0-9]+|^~>
     *
     * @returns BackendPageByPageIdResource
     */
    public getBackendPageByPageId(page_id: string): BackendPageByPageIdResource
    {
        return new BackendPageByPageIdResource(
            page_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/page
     *
     * @returns BackendPageResource
     */
    public getBackendPage(): BackendPageResource
    {
        return new BackendPageResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
