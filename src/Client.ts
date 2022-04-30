
import ClientBackend from './generated/backend/Client';
import ClientConsumer from './generated/consumer/Client';
import {ClientCredentials, CredentialsInterface, MemoryTokenStore, TokenStoreInterface} from "sdkgen-client";

export default class Client {
    private readonly baseUrl: string;
    private readonly credentials: CredentialsInterface;
    private readonly scopes: Array<string>|null;
    private readonly tokenStore: TokenStoreInterface;

    public constructor(baseUrl: string, clientId: string, clientSecret: string, scopes?: Array<string>|null, tokenStore?: TokenStoreInterface) {
        this.baseUrl = baseUrl;
        this.credentials = this.newCredentials(clientId, clientSecret);
        this.scopes = scopes || [];
        this.tokenStore = tokenStore || new MemoryTokenStore();
    }

    public backend(): ClientBackend {
        return new ClientBackend(this.baseUrl, this.credentials, this.tokenStore, this.scopes);
    }

    public consumer(): ClientConsumer  {
        return new ClientConsumer(this.baseUrl, this.credentials, this.tokenStore, this.scopes);
    }

    public getTokenStore(): TokenStoreInterface {
        return this.tokenStore;
    }

    private newCredentials(clientId: string, clientSecret: string): CredentialsInterface {
        return new ClientCredentials(
            clientId,
            clientSecret,
            this.baseUrl + '/authorization/token',
            '',
            this.baseUrl + '/authorization/refresh'
        );
    }
}
