/**
 * ConsumerUserGroup generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPasswordResetResource from "./ConsumerPasswordResetResource";
import ConsumerRegisterResource from "./ConsumerRegisterResource";
import ConsumerProviderByProviderResource from "./ConsumerProviderByProviderResource";
import ConsumerLoginResource from "./ConsumerLoginResource";
import ConsumerAuthorizeResource from "./ConsumerAuthorizeResource";
import ConsumerActivateResource from "./ConsumerActivateResource";
import ConsumerAccountChangePasswordResource from "./ConsumerAccountChangePasswordResource";
import ConsumerAccountResource from "./ConsumerAccountResource";

export default class ConsumerUserGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/password_reset
     */
    public getConsumerPasswordReset(): ConsumerPasswordResetResource
    {
        return new ConsumerPasswordResetResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/register
     */
    public getConsumerRegister(): ConsumerRegisterResource
    {
        return new ConsumerRegisterResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/provider/:provider
     */
    public getConsumerProviderByProvider(provider: string): ConsumerProviderByProviderResource
    {
        return new ConsumerProviderByProviderResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/login
     */
    public getConsumerLogin(): ConsumerLoginResource
    {
        return new ConsumerLoginResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/authorize
     */
    public getConsumerAuthorize(): ConsumerAuthorizeResource
    {
        return new ConsumerAuthorizeResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/activate
     */
    public getConsumerActivate(): ConsumerActivateResource
    {
        return new ConsumerActivateResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/account/change_password
     */
    public getConsumerAccountChangePassword(): ConsumerAccountChangePasswordResource
    {
        return new ConsumerAccountChangePasswordResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/account
     */
    public getConsumerAccount(): ConsumerAccountResource
    {
        return new ConsumerAccountResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
