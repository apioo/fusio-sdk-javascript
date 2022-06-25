/**
 * Client generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ClientAbstract, CredentialsInterface, TokenStoreInterface} from "sdkgen-client"

import ConsumerUserGroup from "./ConsumerUserGroup";
import ConsumerTransactionGroup from "./ConsumerTransactionGroup";
import ConsumerSubscriptionGroup from "./ConsumerSubscriptionGroup";
import ConsumerScopeGroup from "./ConsumerScopeGroup";
import ConsumerPlanGroup from "./ConsumerPlanGroup";
import ConsumerPaymentGroup from "./ConsumerPaymentGroup";
import ConsumerPageGroup from "./ConsumerPageGroup";
import ConsumerLogGroup from "./ConsumerLogGroup";
import ConsumerGrantGroup from "./ConsumerGrantGroup";
import ConsumerEventGroup from "./ConsumerEventGroup";
import ConsumerAppGroup from "./ConsumerAppGroup";

export default class Client extends ClientAbstract {
    public constructor(baseUrl: string, credentials: CredentialsInterface|null = null, tokenStore: TokenStoreInterface|null = null, scopes: Array<string>|null = []) {
        super(baseUrl, credentials, tokenStore, scopes);
    }

    /**
     * Tag: consumer.user
     */
    public async consumerUser(): Promise<ConsumerUserGroup>
    {
        return new ConsumerUserGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.transaction
     */
    public async consumerTransaction(): Promise<ConsumerTransactionGroup>
    {
        return new ConsumerTransactionGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.subscription
     */
    public async consumerSubscription(): Promise<ConsumerSubscriptionGroup>
    {
        return new ConsumerSubscriptionGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.scope
     */
    public async consumerScope(): Promise<ConsumerScopeGroup>
    {
        return new ConsumerScopeGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.plan
     */
    public async consumerPlan(): Promise<ConsumerPlanGroup>
    {
        return new ConsumerPlanGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.payment
     */
    public async consumerPayment(): Promise<ConsumerPaymentGroup>
    {
        return new ConsumerPaymentGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.page
     */
    public async consumerPage(): Promise<ConsumerPageGroup>
    {
        return new ConsumerPageGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.log
     */
    public async consumerLog(): Promise<ConsumerLogGroup>
    {
        return new ConsumerLogGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.grant
     */
    public async consumerGrant(): Promise<ConsumerGrantGroup>
    {
        return new ConsumerGrantGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.event
     */
    public async consumerEvent(): Promise<ConsumerEventGroup>
    {
        return new ConsumerEventGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: consumer.app
     */
    public async consumerApp(): Promise<ConsumerAppGroup>
    {
        return new ConsumerAppGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

}
