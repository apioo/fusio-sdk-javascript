import {AxiosInstance} from 'axios';
import {AccessToken} from './AccesToken';
import Authenticator from './Authenticator';
import ClientBackend from './generated/backend/Client';
import ClientConsumer from './generated/consumer/Client';

export default class Client {
    private baseUrl: string
    private username: string
    private password: string
    private scopes?: string[]
    private httpClient?: AxiosInstance
    private token?: AccessToken

    public constructor(baseUrl: string, username: string, password: string, scopes?: string[], httpClient?: AxiosInstance) {
        this.baseUrl = baseUrl
        this.username = username
        this.password = password
        this.scopes = scopes
        this.httpClient = httpClient
    }

    public async authenticate(): Promise<AccessToken> {
        if (this.token && this.token.expires_in > (Math.floor(Date.now() / 1000))) {
            return this.token
        }

        const authenticator = new Authenticator(this.baseUrl, this.httpClient);
        let response = await authenticator.requestAccessToken(this.username, this.password, this.scopes);
        return this.token = response.data
    }

    public async backend(): Promise<ClientBackend> {
        let token = await this.authenticate();
        return new ClientBackend(this.baseUrl, token.access_token, this.httpClient);
    }

    public async consumer(): Promise<ClientConsumer>  {
        let token = await this.authenticate();
        return new ClientConsumer(this.baseUrl, token.access_token, this.httpClient);
    }
}
