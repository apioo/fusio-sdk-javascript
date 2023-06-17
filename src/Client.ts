import {Client as ClientBackend} from './generated/backend/Client';
import {Client as ClientConsumer} from './generated/consumer/Client';
import {CredentialsInterface, OAuth2, TokenStoreInterface} from "sdkgen-client";

export default class Client {
    private readonly baseUrl: string;
    private readonly credentials: CredentialsInterface;

    public constructor(baseUrl: string, clientId: string, clientSecret: string, scopes?: Array<string>|null, tokenStore?: TokenStoreInterface) {
        this.baseUrl = baseUrl;
        this.credentials = this.newCredentials(clientId, clientSecret, tokenStore, scopes);
    }

    public backend(): ClientBackend {
        return new ClientBackend(this.baseUrl, this.credentials);
    }

    public consumer(): ClientConsumer  {
        return new ClientConsumer(this.baseUrl, this.credentials);
    }

    public getCredentials(): CredentialsInterface {
        return this.credentials;
    }

    private newCredentials(clientId: string, clientSecret: string, tokenStore?: TokenStoreInterface, scopes?: Array<string>|null): CredentialsInterface {
        return new OAuth2(
            clientId,
            clientSecret,
            this.baseUrl + '/authorization/token',
            '',
            tokenStore,
            scopes
        );
    }
}
