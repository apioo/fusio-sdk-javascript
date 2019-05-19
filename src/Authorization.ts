import {AxiosInstance} from "axios";
import {BaseResource} from "./BaseResource";
import {RevokeResource} from "./authorization/RevokeResource";
import {TokenResource} from "./authorization/TokenResource";
import {WhoamiResource} from "./authorization/WhoamiResource";

export class Authorization extends BaseResource {
    public revoke: RevokeResource;
    public token: TokenResource;
    public whoami: WhoamiResource;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance) {
        super(baseUrl, accessToken, httpClient);

        this.revoke = new RevokeResource(this.baseUrl, this.accessToken, this.httpClient);
        this.token = new TokenResource(this.baseUrl, this.accessToken, this.httpClient);
        this.whoami = new WhoamiResource(this.baseUrl, this.accessToken, this.httpClient);
    }
}
