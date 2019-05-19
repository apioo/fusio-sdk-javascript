import * as ConnectionCollection from "../../gen/backend_connection";
import * as ConnectionEntity
    from "../../gen/backend_connection__connection_id__0_9___";
import * as ConnectionForm from "../../gen/backend_connection_form";
import * as ConnectionList from "../../gen/backend_connection_list";
import {BaseResource} from "../BaseResource";

export class ConnectionResource extends BaseResource {
    public collection() {
        return new ConnectionCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new ConnectionEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }

    public form() {
        return new ConnectionForm.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public list() {
        return new ConnectionList.default(this.baseUrl, this.accessToken, this.httpClient);
    }
}
