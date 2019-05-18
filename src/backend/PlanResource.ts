import * as PlanCollection from "../../gen/backend_plan";
import * as PlanEntity from "../../gen/backend_plan__plan_id__0_9___";
import {BaseResource} from "../BaseResource";

export class PlanResource extends BaseResource
{
    public collection()
    {
        return new PlanCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new PlanEntity.default(id, this.accessToken, this.httpClient);
    }
}
