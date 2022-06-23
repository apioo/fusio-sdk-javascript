/**
 * BackendAuditGroup generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendAuditByAuditIdResource from "./BackendAuditByAuditIdResource";
import BackendAuditResource from "./BackendAuditResource";

export default class BackendAuditGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/audit/$audit_id<[0-9]+>
     */
    public getBackendAuditByAuditId(audit_id: string): BackendAuditByAuditIdResource
    {
        return new BackendAuditByAuditIdResource(
            audit_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/audit
     */
    public getBackendAudit(): BackendAuditResource
    {
        return new BackendAuditResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
