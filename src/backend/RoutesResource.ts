import * as RoutesCollection from "../../gen/backend_routes";
import * as RoutesEntity from "../../gen/backend_routes__route_id__0_9___";
import {BaseResource} from "../BaseResource";

export class RoutesResource extends BaseResource {
    public collection() {
        return new RoutesCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new RoutesEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
