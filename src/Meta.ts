import {AxiosInstance} from "axios";
import {BaseResource} from "./BaseResource";
import {DocResource} from "./meta/DocResource";

export class Meta extends BaseResource
{
    public doc: DocResource;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance)
    {
        super(baseUrl, accessToken, httpClient);
        this.init();
    }

    private init()
    {
        this.doc = new DocResource(this.baseUrl, this.accessToken, this.httpClient);
    }
}
