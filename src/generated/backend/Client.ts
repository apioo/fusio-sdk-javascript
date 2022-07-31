/**
 * Client generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {ClientAbstract, CredentialsInterface, TokenStoreInterface} from "sdkgen-client"

import BackendUserGroup from "./BackendUserGroup";
import BackendTrashGroup from "./BackendTrashGroup";
import BackendTransactionGroup from "./BackendTransactionGroup";
import BackendStatisticGroup from "./BackendStatisticGroup";
import BackendSdkGroup from "./BackendSdkGroup";
import BackendScopeGroup from "./BackendScopeGroup";
import BackendSchemaGroup from "./BackendSchemaGroup";
import BackendRouteGroup from "./BackendRouteGroup";
import BackendRoleGroup from "./BackendRoleGroup";
import BackendRateGroup from "./BackendRateGroup";
import BackendPlanGroup from "./BackendPlanGroup";
import BackendPageGroup from "./BackendPageGroup";
import BackendMarketplaceGroup from "./BackendMarketplaceGroup";
import BackendLogGroup from "./BackendLogGroup";
import BackendGeneratorGroup from "./BackendGeneratorGroup";
import BackendEventGroup from "./BackendEventGroup";
import BackendDashboardGroup from "./BackendDashboardGroup";
import BackendCronjobGroup from "./BackendCronjobGroup";
import BackendConnectionGroup from "./BackendConnectionGroup";
import BackendConfigGroup from "./BackendConfigGroup";
import BackendCategoryGroup from "./BackendCategoryGroup";
import BackendAuditGroup from "./BackendAuditGroup";
import BackendAppGroup from "./BackendAppGroup";
import BackendActionGroup from "./BackendActionGroup";
import BackendAccountGroup from "./BackendAccountGroup";

export default class Client extends ClientAbstract {
    public constructor(baseUrl: string, credentials: CredentialsInterface|null = null, tokenStore: TokenStoreInterface|null = null, scopes: Array<string>|null = []) {
        super(baseUrl, credentials, tokenStore, scopes);
    }

    /**
     * Tag: backend.user
     */
    public async backendUser(): Promise<BackendUserGroup>
    {
        return new BackendUserGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.trash
     */
    public async backendTrash(): Promise<BackendTrashGroup>
    {
        return new BackendTrashGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.transaction
     */
    public async backendTransaction(): Promise<BackendTransactionGroup>
    {
        return new BackendTransactionGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.statistic
     */
    public async backendStatistic(): Promise<BackendStatisticGroup>
    {
        return new BackendStatisticGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.sdk
     */
    public async backendSdk(): Promise<BackendSdkGroup>
    {
        return new BackendSdkGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.scope
     */
    public async backendScope(): Promise<BackendScopeGroup>
    {
        return new BackendScopeGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.schema
     */
    public async backendSchema(): Promise<BackendSchemaGroup>
    {
        return new BackendSchemaGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.route
     */
    public async backendRoute(): Promise<BackendRouteGroup>
    {
        return new BackendRouteGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.role
     */
    public async backendRole(): Promise<BackendRoleGroup>
    {
        return new BackendRoleGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.rate
     */
    public async backendRate(): Promise<BackendRateGroup>
    {
        return new BackendRateGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.plan
     */
    public async backendPlan(): Promise<BackendPlanGroup>
    {
        return new BackendPlanGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.page
     */
    public async backendPage(): Promise<BackendPageGroup>
    {
        return new BackendPageGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.marketplace
     */
    public async backendMarketplace(): Promise<BackendMarketplaceGroup>
    {
        return new BackendMarketplaceGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.log
     */
    public async backendLog(): Promise<BackendLogGroup>
    {
        return new BackendLogGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.generator
     */
    public async backendGenerator(): Promise<BackendGeneratorGroup>
    {
        return new BackendGeneratorGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.event
     */
    public async backendEvent(): Promise<BackendEventGroup>
    {
        return new BackendEventGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.dashboard
     */
    public async backendDashboard(): Promise<BackendDashboardGroup>
    {
        return new BackendDashboardGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.cronjob
     */
    public async backendCronjob(): Promise<BackendCronjobGroup>
    {
        return new BackendCronjobGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.connection
     */
    public async backendConnection(): Promise<BackendConnectionGroup>
    {
        return new BackendConnectionGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.config
     */
    public async backendConfig(): Promise<BackendConfigGroup>
    {
        return new BackendConfigGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.category
     */
    public async backendCategory(): Promise<BackendCategoryGroup>
    {
        return new BackendCategoryGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.audit
     */
    public async backendAudit(): Promise<BackendAuditGroup>
    {
        return new BackendAuditGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.app
     */
    public async backendApp(): Promise<BackendAppGroup>
    {
        return new BackendAppGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.action
     */
    public async backendAction(): Promise<BackendActionGroup>
    {
        return new BackendActionGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

    /**
     * Tag: backend.account
     */
    public async backendAccount(): Promise<BackendAccountGroup>
    {
        return new BackendAccountGroup(
            this.baseUrl,
            await this.newHttpClient()
        );
    }

}
