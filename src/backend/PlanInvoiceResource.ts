import * as PlanInvoiceCollection from "../../gen/backend_plan_invoice";
import * as PlanInvoiceEntity
    from "../../gen/backend_plan_invoice__invoice_id__0_9___";
import {BaseResource} from "../BaseResource";

export class PlanInvoiceResource extends BaseResource {
    public collection() {
        return new PlanInvoiceCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new PlanInvoiceEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
