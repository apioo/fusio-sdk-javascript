import * as Activate from "../../gen/consumer_activate";
import {BaseResource} from "../BaseResource";

export class ActivateResource extends BaseResource {
    public do() {
        return new Activate.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
