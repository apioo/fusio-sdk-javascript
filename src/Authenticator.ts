import Axios, {AxiosInstance, AxiosPromise} from 'axios';
import Util from './Util';
import {AccessToken} from './AccesToken';

export default class Authenticator {
    public baseUrl: string;
    public httpClient: AxiosInstance;

    public constructor(baseUrl: string, httpClient?: AxiosInstance|null) {
        this.baseUrl = Util.normalizeBaseUrl(baseUrl);
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
