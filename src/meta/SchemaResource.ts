import * as SchemaEntity from "../../gen/export_schema__name";
import {BaseResource} from "../BaseResource";

export class SchemaResource extends BaseResource {
    public entity(name: string) {
        return new SchemaEntity.default(name, this.baseUrl, this.accessToken, this.httpClient);
    }
}
