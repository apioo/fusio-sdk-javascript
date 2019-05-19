import * as SchemaCollection from "../../gen/backend_schema";
import * as SchemaEntity from "../../gen/backend_schema__schema_id__0_9___";
import * as SchemaForm from "../../gen/backend_schema_form__schema_id__0_9___";
import * as SchemaPreview
    from "../../gen/backend_schema_preview__schema_id__0_9___";
import {BaseResource} from "../BaseResource";

export class SchemaResource extends BaseResource {
    public collection() {
        return new SchemaCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number) {
        return new SchemaEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }

    public form(id: number) {
        return new SchemaForm.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }

    public preview(id: number) {
        return new SchemaPreview.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
