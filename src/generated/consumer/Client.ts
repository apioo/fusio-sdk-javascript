/**
 * Client generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import ConsumerPasswordResetResource from "./ConsumerPasswordResetResource";
import ConsumerRegisterResource from "./ConsumerRegisterResource";
import ConsumerProviderByProviderResource from "./ConsumerProviderByProviderResource";
import ConsumerLoginResource from "./ConsumerLoginResource";
import ConsumerAuthorizeResource from "./ConsumerAuthorizeResource";
import ConsumerActivateResource from "./ConsumerActivateResource";
import ConsumerAccountChangePasswordResource from "./ConsumerAccountChangePasswordResource";
import ConsumerAccountResource from "./ConsumerAccountResource";
import ConsumerTransactionByTransactionIdResource from "./ConsumerTransactionByTransactionIdResource";
import ConsumerTransactionPrepareByProviderResource from "./ConsumerTransactionPrepareByProviderResource";
import ConsumerTransactionExecuteByTransactionIdResource from "./ConsumerTransactionExecuteByTransactionIdResource";
import ConsumerTransactionResource from "./ConsumerTransactionResource";
import ConsumerSubscriptionBySubscriptionIdResource from "./ConsumerSubscriptionBySubscriptionIdResource";
import ConsumerSubscriptionResource from "./ConsumerSubscriptionResource";
import ConsumerScopeResource from "./ConsumerScopeResource";
import ConsumerPlanByPlanIdResource from "./ConsumerPlanByPlanIdResource";
import ConsumerPlanResource from "./ConsumerPlanResource";
import ConsumerPlanInvoiceByInvoiceIdResource from "./ConsumerPlanInvoiceByInvoiceIdResource";
import ConsumerPlanInvoiceResource from "./ConsumerPlanInvoiceResource";
import ConsumerPlanContractByContractIdResource from "./ConsumerPlanContractByContractIdResource";
import ConsumerPlanContractResource from "./ConsumerPlanContractResource";
import ConsumerGrantByGrantIdResource from "./ConsumerGrantByGrantIdResource";
import ConsumerGrantResource from "./ConsumerGrantResource";
import ConsumerEventResource from "./ConsumerEventResource";
import ConsumerAppByAppIdResource from "./ConsumerAppByAppIdResource";
import ConsumerAppResource from "./ConsumerAppResource";

export default class Client {
    private baseUrl: string;
    private token: string;
    private httpClient: AxiosInstance;

    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.baseUrl = baseUrl;
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * Endpoint: /consumer/password_reset
     * 
     * @returns ConsumerPasswordResetResource
     */
    public getConsumerPasswordReset(): ConsumerPasswordResetResource
    {
        return new ConsumerPasswordResetResource(
            this.baseUrl,
            this.token,
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
            this.token,
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
            this.token,
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
            this.token,
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
            this.token,
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
            this.token,
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
            this.token,
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
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction/$transaction_id<[0-9]+>
     * 
     * @returns ConsumerTransactionByTransactionIdResource
     */
    public getConsumerTransactionByTransactionId(transaction_id: string): ConsumerTransactionByTransactionIdResource
    {
        return new ConsumerTransactionByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction/prepare/:provider
     * 
     * @returns ConsumerTransactionPrepareByProviderResource
     */
    public getConsumerTransactionPrepareByProvider(provider: string): ConsumerTransactionPrepareByProviderResource
    {
        return new ConsumerTransactionPrepareByProviderResource(
            provider,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction/execute/:transaction_id
     * 
     * @returns ConsumerTransactionExecuteByTransactionIdResource
     */
    public getConsumerTransactionExecuteByTransactionId(transaction_id: string): ConsumerTransactionExecuteByTransactionIdResource
    {
        return new ConsumerTransactionExecuteByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction
     * 
     * @returns ConsumerTransactionResource
     */
    public getConsumerTransaction(): ConsumerTransactionResource
    {
        return new ConsumerTransactionResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/subscription/$subscription_id<[0-9]+>
     * 
     * @returns ConsumerSubscriptionBySubscriptionIdResource
     */
    public getConsumerSubscriptionBySubscriptionId(subscription_id: string): ConsumerSubscriptionBySubscriptionIdResource
    {
        return new ConsumerSubscriptionBySubscriptionIdResource(
            subscription_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/subscription
     * 
     * @returns ConsumerSubscriptionResource
     */
    public getConsumerSubscription(): ConsumerSubscriptionResource
    {
        return new ConsumerSubscriptionResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/scope
     * 
     * @returns ConsumerScopeResource
     */
    public getConsumerScope(): ConsumerScopeResource
    {
        return new ConsumerScopeResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan/$plan_id<[0-9]+>
     * 
     * @returns ConsumerPlanByPlanIdResource
     */
    public getConsumerPlanByPlanId(plan_id: string): ConsumerPlanByPlanIdResource
    {
        return new ConsumerPlanByPlanIdResource(
            plan_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan
     * 
     * @returns ConsumerPlanResource
     */
    public getConsumerPlan(): ConsumerPlanResource
    {
        return new ConsumerPlanResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan/invoice/$invoice_id<[0-9]+>
     * 
     * @returns ConsumerPlanInvoiceByInvoiceIdResource
     */
    public getConsumerPlanInvoiceByInvoiceId(invoice_id: string): ConsumerPlanInvoiceByInvoiceIdResource
    {
        return new ConsumerPlanInvoiceByInvoiceIdResource(
            invoice_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan/invoice
     * 
     * @returns ConsumerPlanInvoiceResource
     */
    public getConsumerPlanInvoice(): ConsumerPlanInvoiceResource
    {
        return new ConsumerPlanInvoiceResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan/contract/$contract_id<[0-9]+>
     * 
     * @returns ConsumerPlanContractByContractIdResource
     */
    public getConsumerPlanContractByContractId(contract_id: string): ConsumerPlanContractByContractIdResource
    {
        return new ConsumerPlanContractByContractIdResource(
            contract_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/plan/contract
     * 
     * @returns ConsumerPlanContractResource
     */
    public getConsumerPlanContract(): ConsumerPlanContractResource
    {
        return new ConsumerPlanContractResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/grant/$grant_id<[0-9]+>
     * 
     * @returns ConsumerGrantByGrantIdResource
     */
    public getConsumerGrantByGrantId(grant_id: string): ConsumerGrantByGrantIdResource
    {
        return new ConsumerGrantByGrantIdResource(
            grant_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/grant
     * 
     * @returns ConsumerGrantResource
     */
    public getConsumerGrant(): ConsumerGrantResource
    {
        return new ConsumerGrantResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/event
     * 
     * @returns ConsumerEventResource
     */
    public getConsumerEvent(): ConsumerEventResource
    {
        return new ConsumerEventResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/app/$app_id<[0-9]+>
     * 
     * @returns ConsumerAppByAppIdResource
     */
    public getConsumerAppByAppId(app_id: string): ConsumerAppByAppIdResource
    {
        return new ConsumerAppByAppIdResource(
            app_id,
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/app
     * 
     * @returns ConsumerAppResource
     */
    public getConsumerApp(): ConsumerAppResource
    {
        return new ConsumerAppResource(
            this.baseUrl,
            this.token,
            this.httpClient
        );
    }

}
