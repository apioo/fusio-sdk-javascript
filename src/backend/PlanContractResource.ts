import * as PlanContractCollection from "../../gen/backend_plan_contract";
import * as PlanContractEntity
    from "../../gen/backend_plan_contract__contract_id__0_9___";
import {BaseResource} from "../BaseResource";

export class PlanContractResource extends BaseResource {
    public collection() {
        return new PlanContractCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new PlanContractEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
