/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {ClientAbstract, CredentialsInterface, TokenStoreInterface} from "sdkgen-client"
import {OAuth2} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {AuthorizationTag} from "./AuthorizationTag";
import {SystemTag} from "./SystemTag";
import {ConsumerTag} from "./ConsumerTag";
import {BackendTag} from "./BackendTag";

export class Client extends ClientAbstract {
    public authorization(): AuthorizationTag
    {
        return new AuthorizationTag(
            this.httpClient,
            this.parser
        );
    }

    public system(): SystemTag
    {
        return new SystemTag(
            this.httpClient,
            this.parser
        );
    }

    public consumer(): ConsumerTag
    {
        return new ConsumerTag(
            this.httpClient,
            this.parser
        );
    }

    public backend(): BackendTag
    {
        return new BackendTag(
            this.httpClient,
            this.parser
        );
    }



    public static build(clientId: string, clientSecret: string, tokenStore: TokenStoreInterface|null, scopes: Array<string>|null): Client
    {
        return new Client('https://api.typehub.cloud/', new OAuth2(clientId, clientSecret, 'https://api.typehub.cloud/authorization/token', '', tokenStore, scopes));
    }
}
