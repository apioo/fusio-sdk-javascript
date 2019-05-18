import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/authorization/token";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Authorization_code | Password | Client_credentials | Refresh_token): AxiosPromise<Access_token> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Access_token>(this.url, data, params);
    }

}

interface Endpoint {
    Authorization?: Authorization_code | Password | Client_credentials | Refresh_token
    Access_token?: Access_token
}
interface Authorization_code {
    grant_type: string
    code: string
    redirect_uri?: string
    client_id?: string
}
interface Password {
    grant_type: string
    username: string
    password: string
    scope?: string
}
interface Client_credentials {
    grant_type: string
    scope?: string
}
interface Refresh_token {
    grant_type: string
    refresh_token: string
    scope?: string
}
interface Access_token {
    access_token?: string
    token_type?: string
    expires_in?: string
    refresh_token?: string
}


