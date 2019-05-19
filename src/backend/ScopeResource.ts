import * as ScopeCollection from "../../gen/backend_scope";
import * as ScopeEntity from "../../gen/backend_scope__scope_id__0_9___";
import {BaseResource} from "../BaseResource";

export class ScopeResource extends BaseResource {
    public collection() {
        return new ScopeCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new ScopeEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
