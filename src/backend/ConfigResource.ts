import * as ConfigCollection from "../../gen/backend_config";
import * as ConfigEntity from "../../gen/backend_config__config_id__0_9___";
import {BaseResource} from "../BaseResource";

export class ConfigResource extends BaseResource {
    public collection() {
        return new ConfigCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new ConfigEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
