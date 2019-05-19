import * as RateCollection from "../../gen/backend_rate";
import * as RateEntity from "../../gen/backend_rate__rate_id__0_9___";
import {BaseResource} from "../BaseResource";

export class RateResource extends BaseResource {
    public collection() {
        return new RateCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new RateEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
