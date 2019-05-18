import * as AuditCollection from "../../gen/backend_audit";
import * as AuditEntity from "../../gen/backend_audit__audit_id__0_9___";
import {BaseResource} from "../BaseResource";

export class AuditResource extends BaseResource
{
    public collection()
    {
        return new AuditCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new AuditEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
