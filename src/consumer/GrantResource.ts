import * as GrantCollection from "../../gen/consumer_grant";
import * as GrantEntity from "../../gen/consumer_grant__grant_id__0_9___";
import {BaseResource} from "../BaseResource";

export class GrantResource extends BaseResource {
    public collection() {
        return new GrantCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new GrantEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
