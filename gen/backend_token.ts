import {AxiosInstance} from "axios";
import Oauth2Resource from "../src/Oauth2Resource";

export default class Resource extends Oauth2Resource {
    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {
        super("/backend/token", baseUrl, token, httpClient);
    }
}
