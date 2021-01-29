import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Fusio} from "../index";

interface AccessToken {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: string,
}

export class Authenticator {
    public baseUrl: string;
    public httpClient: AxiosInstance;

    public constructor(baseUrl: string, httpClient?: AxiosInstance|null) {
        this.baseUrl = Fusio.normalizeBaseUrl(baseUrl);
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public requestAccessToken(username: string, password: string, scopes?: string[] | null): AxiosPromise<AccessToken> {
        let payload : {
            grant_type: string;
            scope?: string;
        } = {
            grant_type: 'client_credentials'
        };

        if (scopes) {
            payload.scope = scopes.join(',');
        }

        return this.httpClient.post(this.baseUrl + '/authorization/token', payload, {
            headers: {
                Authorization: 'Basic ' + btoa(username + ':' + password),
            },
        });
    }

    public revokeAccessToken(accessToken: string): AxiosPromise<void> {
        return this.httpClient.post(this.baseUrl + '/authorization/revoke', {}, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
    }
}
