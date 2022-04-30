/**
 * ConsumerUserGroup generated on 2022-04-30
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
     *
     * @returns ConsumerPasswordResetResource
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
     *
     * @returns ConsumerRegisterResource
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
     *
     * @returns ConsumerProviderByProviderResource
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
     *
     * @returns ConsumerLoginResource
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
     *
     * @returns ConsumerAuthorizeResource
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
     *
     * @returns ConsumerActivateResource
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
     *
     * @returns ConsumerAccountChangePasswordResource
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
     *
     * @returns ConsumerAccountResource
     */
    public getConsumerAccount(): ConsumerAccountResource
    {
        return new ConsumerAccountResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
