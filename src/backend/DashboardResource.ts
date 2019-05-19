import * as DashboardCollection from "../../gen/backend_dashboard";
import {BaseResource} from "../BaseResource";

export class DashboardResource extends BaseResource {
    public collection() {
        return new DashboardCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
