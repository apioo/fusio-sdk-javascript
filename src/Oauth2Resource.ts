import Axios, {AxiosInstance, AxiosPromise} from "axios";

declare let window: any;

export default class Oauth2Resource {
    private readonly url: string;
    private token: string;
    private httpClient: AxiosInstance;

    public constructor(endpoint: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.url = baseUrl + endpoint;
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public authorizationCode(code: string, redirectUri?: string, clientId?: string) {
        let options = <Authorization_code>{
            grant_type: "authorization_code",
            code: code,
        };

        if (redirectUri) {
            options.redirect_uri = redirectUri;
        }

        if (clientId) {
            options.client_id = clientId;
        }

        return this.post(options);
    }

    public password(clientId: string, clientSecret: string, username: string, password: string, scope?: string) {
        let options = <Password>{
            grant_type: "password",
            username: username,
            password: password,
        };

        if (scope) {
            options.scope = scope;
        }

        return this.post(options, clientId, clientSecret);
    }

    public clientCredentials(clientId: string, clientSecret: string, scope?: string) {
        let options = <Password>{
            grant_type: "client_credentials",
        };

        if (scope) {
            options.scope = scope;
        }

        return this.post(options, clientId, clientSecret);
    }

    public refreshToken(refreshToken: string) {
        let options = <Refresh_token>{
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        };

        return this.post(options);
    }

    public post(data: Authorization_code | Password | Client_credentials | Refresh_token, clientId?: string, clientSecret?: string): AxiosPromise<Access_token> {
        let params = {
            method: "POST",
            headers: {}
        };

        if (clientId && clientSecret) {
            params.headers = {
                "Authorization": "Basic " + window.btoa(clientId + ":" + clientSecret)
            };
        }

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


