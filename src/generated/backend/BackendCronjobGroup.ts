/**
 * BackendCronjobGroup generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendCronjobByCronjobIdResource from "./BackendCronjobByCronjobIdResource";
import BackendCronjobResource from "./BackendCronjobResource";

export default class BackendCronjobGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/cronjob/$cronjob_id<[0-9]+|^~>
     */
    public getBackendCronjobByCronjobId(cronjob_id: string): BackendCronjobByCronjobIdResource
    {
        return new BackendCronjobByCronjobIdResource(
            cronjob_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/cronjob
     */
    public getBackendCronjob(): BackendCronjobResource
    {
        return new BackendCronjobResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
