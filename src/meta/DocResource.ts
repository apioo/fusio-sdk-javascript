import * as DocCollection from "../../gen/doc";
import * as DocEntity from "../../gen/doc__version__path";
import {BaseResource} from "../BaseResource";

export class DocResource extends BaseResource
{
    public collection()
    {
        return new DocCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(version: string, path: string)
    {
        return new DocEntity.default(version, path, this.baseUrl, this.accessToken, this.httpClient);
    }
}
