/**
 * BackendLogGroup generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendLogByLogIdResource from "./BackendLogByLogIdResource";
import BackendLogResource from "./BackendLogResource";
import BackendLogErrorByErrorIdResource from "./BackendLogErrorByErrorIdResource";
import BackendLogErrorResource from "./BackendLogErrorResource";

export default class BackendLogGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/log/$log_id<[0-9]+>
     */
    public getBackendLogByLogId(log_id: string): BackendLogByLogIdResource
    {
        return new BackendLogByLogIdResource(
            log_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/log
     */
    public getBackendLog(): BackendLogResource
    {
        return new BackendLogResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/log/error/$error_id<[0-9]+>
     */
    public getBackendLogErrorByErrorId(error_id: string): BackendLogErrorByErrorIdResource
    {
        return new BackendLogErrorByErrorIdResource(
            error_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/log/error
     */
    public getBackendLogError(): BackendLogErrorResource
    {
        return new BackendLogErrorResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
