/**
 * Client generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {ClientAbstract, TokenStoreInterface} from "sdkgen-client"

import BackendUserByUserIdResource from "./BackendUserByUserIdResource";
import BackendUserResource from "./BackendUserResource";
import BackendTransactionByTransactionIdResource from "./BackendTransactionByTransactionIdResource";
import BackendTransactionResource from "./BackendTransactionResource";
import BackendStatisticUsedPointsResource from "./BackendStatisticUsedPointsResource";
import BackendStatisticTimePerRouteResource from "./BackendStatisticTimePerRouteResource";
import BackendStatisticTimeAverageResource from "./BackendStatisticTimeAverageResource";
import BackendStatisticMostUsedRoutesResource from "./BackendStatisticMostUsedRoutesResource";
import BackendStatisticMostUsedAppsResource from "./BackendStatisticMostUsedAppsResource";
import BackendStatisticIssuedTokensResource from "./BackendStatisticIssuedTokensResource";
import BackendStatisticIncomingTransactionsResource from "./BackendStatisticIncomingTransactionsResource";
import BackendStatisticIncomingRequestsResource from "./BackendStatisticIncomingRequestsResource";
import BackendStatisticErrorsPerRouteResource from "./BackendStatisticErrorsPerRouteResource";
import BackendStatisticCountRequestsResource from "./BackendStatisticCountRequestsResource";
import BackendSdkResource from "./BackendSdkResource";
import BackendScopeByScopeIdResource from "./BackendScopeByScopeIdResource";
import BackendScopeCategoriesResource from "./BackendScopeCategoriesResource";
import BackendScopeResource from "./BackendScopeResource";
import BackendSchemaBySchemaIdResource from "./BackendSchemaBySchemaIdResource";
import BackendSchemaFormBySchemaIdResource from "./BackendSchemaFormBySchemaIdResource";
import BackendSchemaPreviewBySchemaIdResource from "./BackendSchemaPreviewBySchemaIdResource";
import BackendSchemaResource from "./BackendSchemaResource";
import BackendRoutesByRouteIdResource from "./BackendRoutesByRouteIdResource";
import BackendRoutesProviderByProviderResource from "./BackendRoutesProviderByProviderResource";
import BackendRoutesProviderResource from "./BackendRoutesProviderResource";
import BackendRoutesResource from "./BackendRoutesResource";
import BackendRoleByRoleIdResource from "./BackendRoleByRoleIdResource";
import BackendRoleResource from "./BackendRoleResource";
import BackendRateByRateIdResource from "./BackendRateByRateIdResource";
import BackendRateResource from "./BackendRateResource";
import BackendPlanByPlanIdResource from "./BackendPlanByPlanIdResource";
import BackendPlanResource from "./BackendPlanResource";
import BackendPlanInvoiceByInvoiceIdResource from "./BackendPlanInvoiceByInvoiceIdResource";
import BackendPlanInvoiceResource from "./BackendPlanInvoiceResource";
import BackendPlanContractByContractIdResource from "./BackendPlanContractByContractIdResource";
import BackendPlanContractResource from "./BackendPlanContractResource";
import BackendPageByPageIdResource from "./BackendPageByPageIdResource";
import BackendPageResource from "./BackendPageResource";
import BackendMarketplaceByAppNameResource from "./BackendMarketplaceByAppNameResource";
import BackendMarketplaceResource from "./BackendMarketplaceResource";
import BackendLogByLogIdResource from "./BackendLogByLogIdResource";
import BackendLogResource from "./BackendLogResource";
import BackendLogErrorByErrorIdResource from "./BackendLogErrorByErrorIdResource";
import BackendLogErrorResource from "./BackendLogErrorResource";
import BackendEventByEventIdResource from "./BackendEventByEventIdResource";
import BackendEventResource from "./BackendEventResource";
import BackendEventSubscriptionBySubscriptionIdResource from "./BackendEventSubscriptionBySubscriptionIdResource";
import BackendEventSubscriptionResource from "./BackendEventSubscriptionResource";
import BackendDashboardResource from "./BackendDashboardResource";
import BackendCronjobByCronjobIdResource from "./BackendCronjobByCronjobIdResource";
import BackendCronjobResource from "./BackendCronjobResource";
import BackendConnectionByConnectionIdRedirectResource from "./BackendConnectionByConnectionIdRedirectResource";
import BackendConnectionByConnectionIdResource from "./BackendConnectionByConnectionIdResource";
import BackendConnectionFormResource from "./BackendConnectionFormResource";
import BackendConnectionListResource from "./BackendConnectionListResource";
import BackendConnectionResource from "./BackendConnectionResource";
import BackendConfigByConfigIdResource from "./BackendConfigByConfigIdResource";
import BackendConfigResource from "./BackendConfigResource";
import BackendCategoryByCategoryIdResource from "./BackendCategoryByCategoryIdResource";
import BackendCategoryResource from "./BackendCategoryResource";
import BackendAuditByAuditIdResource from "./BackendAuditByAuditIdResource";
import BackendAuditResource from "./BackendAuditResource";
import BackendAppByAppIdTokenAndTokenIdResource from "./BackendAppByAppIdTokenAndTokenIdResource";
import BackendAppByAppIdResource from "./BackendAppByAppIdResource";
import BackendAppResource from "./BackendAppResource";
import BackendAppTokenByTokenIdResource from "./BackendAppTokenByTokenIdResource";
import BackendAppTokenResource from "./BackendAppTokenResource";
import BackendActionByActionIdResource from "./BackendActionByActionIdResource";
import BackendActionExecuteByActionIdResource from "./BackendActionExecuteByActionIdResource";
import BackendActionFormResource from "./BackendActionFormResource";
import BackendActionListResource from "./BackendActionListResource";
import BackendActionResource from "./BackendActionResource";
import BackendAccountChangePasswordResource from "./BackendAccountChangePasswordResource";
import BackendAccountResource from "./BackendAccountResource";

export default class Client extends ClientAbstract {
    public constructor(baseUrl: string, , tokenStore: TokenStoreInterface|null = null) {
        super(baseUrl, null, tokenStore);
    }

    /**
     * Endpoint: /backend/user/$user_id<[0-9]+>
     *
     * @returns BackendUserByUserIdResource
     */
    public getBackendUserByUserId(user_id: string): BackendUserByUserIdResource
    {
        return new BackendUserByUserIdResource(
            user_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/user
     *
     * @returns BackendUserResource
     */
    public getBackendUser(): BackendUserResource
    {
        return new BackendUserResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/transaction/$transaction_id<[0-9]+>
     *
     * @returns BackendTransactionByTransactionIdResource
     */
    public getBackendTransactionByTransactionId(transaction_id: string): BackendTransactionByTransactionIdResource
    {
        return new BackendTransactionByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/transaction
     *
     * @returns BackendTransactionResource
     */
    public getBackendTransaction(): BackendTransactionResource
    {
        return new BackendTransactionResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/used_points
     *
     * @returns BackendStatisticUsedPointsResource
     */
    public getBackendStatisticUsedPoints(): BackendStatisticUsedPointsResource
    {
        return new BackendStatisticUsedPointsResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/time_per_route
     *
     * @returns BackendStatisticTimePerRouteResource
     */
    public getBackendStatisticTimePerRoute(): BackendStatisticTimePerRouteResource
    {
        return new BackendStatisticTimePerRouteResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/time_average
     *
     * @returns BackendStatisticTimeAverageResource
     */
    public getBackendStatisticTimeAverage(): BackendStatisticTimeAverageResource
    {
        return new BackendStatisticTimeAverageResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/most_used_routes
     *
     * @returns BackendStatisticMostUsedRoutesResource
     */
    public getBackendStatisticMostUsedRoutes(): BackendStatisticMostUsedRoutesResource
    {
        return new BackendStatisticMostUsedRoutesResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/most_used_apps
     *
     * @returns BackendStatisticMostUsedAppsResource
     */
    public getBackendStatisticMostUsedApps(): BackendStatisticMostUsedAppsResource
    {
        return new BackendStatisticMostUsedAppsResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/issued_tokens
     *
     * @returns BackendStatisticIssuedTokensResource
     */
    public getBackendStatisticIssuedTokens(): BackendStatisticIssuedTokensResource
    {
        return new BackendStatisticIssuedTokensResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/incoming_transactions
     *
     * @returns BackendStatisticIncomingTransactionsResource
     */
    public getBackendStatisticIncomingTransactions(): BackendStatisticIncomingTransactionsResource
    {
        return new BackendStatisticIncomingTransactionsResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/incoming_requests
     *
     * @returns BackendStatisticIncomingRequestsResource
     */
    public getBackendStatisticIncomingRequests(): BackendStatisticIncomingRequestsResource
    {
        return new BackendStatisticIncomingRequestsResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/errors_per_route
     *
     * @returns BackendStatisticErrorsPerRouteResource
     */
    public getBackendStatisticErrorsPerRoute(): BackendStatisticErrorsPerRouteResource
    {
        return new BackendStatisticErrorsPerRouteResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/statistic/count_requests
     *
     * @returns BackendStatisticCountRequestsResource
     */
    public getBackendStatisticCountRequests(): BackendStatisticCountRequestsResource
    {
        return new BackendStatisticCountRequestsResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/sdk
     *
     * @returns BackendSdkResource
     */
    public getBackendSdk(): BackendSdkResource
    {
        return new BackendSdkResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/scope/$scope_id<[0-9]+|^~>
     *
     * @returns BackendScopeByScopeIdResource
     */
    public getBackendScopeByScopeId(scope_id: string): BackendScopeByScopeIdResource
    {
        return new BackendScopeByScopeIdResource(
            scope_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/scope/categories
     *
     * @returns BackendScopeCategoriesResource
     */
    public getBackendScopeCategories(): BackendScopeCategoriesResource
    {
        return new BackendScopeCategoriesResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/scope
     *
     * @returns BackendScopeResource
     */
    public getBackendScope(): BackendScopeResource
    {
        return new BackendScopeResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/schema/$schema_id<[0-9]+|^~>
     *
     * @returns BackendSchemaBySchemaIdResource
     */
    public getBackendSchemaBySchemaId(schema_id: string): BackendSchemaBySchemaIdResource
    {
        return new BackendSchemaBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/schema/form/$schema_id<[0-9]+>
     *
     * @returns BackendSchemaFormBySchemaIdResource
     */
    public getBackendSchemaFormBySchemaId(schema_id: string): BackendSchemaFormBySchemaIdResource
    {
        return new BackendSchemaFormBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/schema/preview/:schema_id
     *
     * @returns BackendSchemaPreviewBySchemaIdResource
     */
    public getBackendSchemaPreviewBySchemaId(schema_id: string): BackendSchemaPreviewBySchemaIdResource
    {
        return new BackendSchemaPreviewBySchemaIdResource(
            schema_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/schema
     *
     * @returns BackendSchemaResource
     */
    public getBackendSchema(): BackendSchemaResource
    {
        return new BackendSchemaResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/routes/$route_id<[0-9]+>
     *
     * @returns BackendRoutesByRouteIdResource
     */
    public getBackendRoutesByRouteId(route_id: string): BackendRoutesByRouteIdResource
    {
        return new BackendRoutesByRouteIdResource(
            route_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/routes/provider/:provider
     *
     * @returns BackendRoutesProviderByProviderResource
     */
    public getBackendRoutesProviderByProvider(provider: string): BackendRoutesProviderByProviderResource
    {
        return new BackendRoutesProviderByProviderResource(
            provider,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/routes/provider
     *
     * @returns BackendRoutesProviderResource
     */
    public getBackendRoutesProvider(): BackendRoutesProviderResource
    {
        return new BackendRoutesProviderResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/routes
     *
     * @returns BackendRoutesResource
     */
    public getBackendRoutes(): BackendRoutesResource
    {
        return new BackendRoutesResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/role/$role_id<[0-9]+|^~>
     *
     * @returns BackendRoleByRoleIdResource
     */
    public getBackendRoleByRoleId(role_id: string): BackendRoleByRoleIdResource
    {
        return new BackendRoleByRoleIdResource(
            role_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/role
     *
     * @returns BackendRoleResource
     */
    public getBackendRole(): BackendRoleResource
    {
        return new BackendRoleResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/rate/$rate_id<[0-9]+|^~>
     *
     * @returns BackendRateByRateIdResource
     */
    public getBackendRateByRateId(rate_id: string): BackendRateByRateIdResource
    {
        return new BackendRateByRateIdResource(
            rate_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/rate
     *
     * @returns BackendRateResource
     */
    public getBackendRate(): BackendRateResource
    {
        return new BackendRateResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan/$plan_id<[0-9]+|^~>
     *
     * @returns BackendPlanByPlanIdResource
     */
    public getBackendPlanByPlanId(plan_id: string): BackendPlanByPlanIdResource
    {
        return new BackendPlanByPlanIdResource(
            plan_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan
     *
     * @returns BackendPlanResource
     */
    public getBackendPlan(): BackendPlanResource
    {
        return new BackendPlanResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan/invoice/$invoice_id<[0-9]+>
     *
     * @returns BackendPlanInvoiceByInvoiceIdResource
     */
    public getBackendPlanInvoiceByInvoiceId(invoice_id: string): BackendPlanInvoiceByInvoiceIdResource
    {
        return new BackendPlanInvoiceByInvoiceIdResource(
            invoice_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan/invoice
     *
     * @returns BackendPlanInvoiceResource
     */
    public getBackendPlanInvoice(): BackendPlanInvoiceResource
    {
        return new BackendPlanInvoiceResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan/contract/$contract_id<[0-9]+>
     *
     * @returns BackendPlanContractByContractIdResource
     */
    public getBackendPlanContractByContractId(contract_id: string): BackendPlanContractByContractIdResource
    {
        return new BackendPlanContractByContractIdResource(
            contract_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/plan/contract
     *
     * @returns BackendPlanContractResource
     */
    public getBackendPlanContract(): BackendPlanContractResource
    {
        return new BackendPlanContractResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/page/$page_id<[0-9]+|^~>
     *
     * @returns BackendPageByPageIdResource
     */
    public getBackendPageByPageId(page_id: string): BackendPageByPageIdResource
    {
        return new BackendPageByPageIdResource(
            page_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/page
     *
     * @returns BackendPageResource
     */
    public getBackendPage(): BackendPageResource
    {
        return new BackendPageResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/marketplace/:app_name
     *
     * @returns BackendMarketplaceByAppNameResource
     */
    public getBackendMarketplaceByAppName(app_name: string): BackendMarketplaceByAppNameResource
    {
        return new BackendMarketplaceByAppNameResource(
            app_name,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/marketplace
     *
     * @returns BackendMarketplaceResource
     */
    public getBackendMarketplace(): BackendMarketplaceResource
    {
        return new BackendMarketplaceResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/log/$log_id<[0-9]+>
     *
     * @returns BackendLogByLogIdResource
     */
    public getBackendLogByLogId(log_id: string): BackendLogByLogIdResource
    {
        return new BackendLogByLogIdResource(
            log_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/log
     *
     * @returns BackendLogResource
     */
    public getBackendLog(): BackendLogResource
    {
        return new BackendLogResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/log/error/$error_id<[0-9]+>
     *
     * @returns BackendLogErrorByErrorIdResource
     */
    public getBackendLogErrorByErrorId(error_id: string): BackendLogErrorByErrorIdResource
    {
        return new BackendLogErrorByErrorIdResource(
            error_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/log/error
     *
     * @returns BackendLogErrorResource
     */
    public getBackendLogError(): BackendLogErrorResource
    {
        return new BackendLogErrorResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/event/$event_id<[0-9]+|^~>
     *
     * @returns BackendEventByEventIdResource
     */
    public getBackendEventByEventId(event_id: string): BackendEventByEventIdResource
    {
        return new BackendEventByEventIdResource(
            event_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/event
     *
     * @returns BackendEventResource
     */
    public getBackendEvent(): BackendEventResource
    {
        return new BackendEventResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/event/subscription/$subscription_id<[0-9]+>
     *
     * @returns BackendEventSubscriptionBySubscriptionIdResource
     */
    public getBackendEventSubscriptionBySubscriptionId(subscription_id: string): BackendEventSubscriptionBySubscriptionIdResource
    {
        return new BackendEventSubscriptionBySubscriptionIdResource(
            subscription_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/event/subscription
     *
     * @returns BackendEventSubscriptionResource
     */
    public getBackendEventSubscription(): BackendEventSubscriptionResource
    {
        return new BackendEventSubscriptionResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/dashboard
     *
     * @returns BackendDashboardResource
     */
    public getBackendDashboard(): BackendDashboardResource
    {
        return new BackendDashboardResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/cronjob/$cronjob_id<[0-9]+|^~>
     *
     * @returns BackendCronjobByCronjobIdResource
     */
    public getBackendCronjobByCronjobId(cronjob_id: string): BackendCronjobByCronjobIdResource
    {
        return new BackendCronjobByCronjobIdResource(
            cronjob_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/cronjob
     *
     * @returns BackendCronjobResource
     */
    public getBackendCronjob(): BackendCronjobResource
    {
        return new BackendCronjobResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>/redirect
     *
     * @returns BackendConnectionByConnectionIdRedirectResource
     */
    public getBackendConnectionByConnectionIdRedirect(connection_id: string): BackendConnectionByConnectionIdRedirectResource
    {
        return new BackendConnectionByConnectionIdRedirectResource(
            connection_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/connection/$connection_id<[0-9]+|^~>
     *
     * @returns BackendConnectionByConnectionIdResource
     */
    public getBackendConnectionByConnectionId(connection_id: string): BackendConnectionByConnectionIdResource
    {
        return new BackendConnectionByConnectionIdResource(
            connection_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/connection/form
     *
     * @returns BackendConnectionFormResource
     */
    public getBackendConnectionForm(): BackendConnectionFormResource
    {
        return new BackendConnectionFormResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/connection/list
     *
     * @returns BackendConnectionListResource
     */
    public getBackendConnectionList(): BackendConnectionListResource
    {
        return new BackendConnectionListResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/connection
     *
     * @returns BackendConnectionResource
     */
    public getBackendConnection(): BackendConnectionResource
    {
        return new BackendConnectionResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/config/$config_id<[0-9]+|^~>
     *
     * @returns BackendConfigByConfigIdResource
     */
    public getBackendConfigByConfigId(config_id: string): BackendConfigByConfigIdResource
    {
        return new BackendConfigByConfigIdResource(
            config_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/config
     *
     * @returns BackendConfigResource
     */
    public getBackendConfig(): BackendConfigResource
    {
        return new BackendConfigResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/category/$category_id<[0-9]+|^~>
     *
     * @returns BackendCategoryByCategoryIdResource
     */
    public getBackendCategoryByCategoryId(category_id: string): BackendCategoryByCategoryIdResource
    {
        return new BackendCategoryByCategoryIdResource(
            category_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/category
     *
     * @returns BackendCategoryResource
     */
    public getBackendCategory(): BackendCategoryResource
    {
        return new BackendCategoryResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/audit/$audit_id<[0-9]+>
     *
     * @returns BackendAuditByAuditIdResource
     */
    public getBackendAuditByAuditId(audit_id: string): BackendAuditByAuditIdResource
    {
        return new BackendAuditByAuditIdResource(
            audit_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/audit
     *
     * @returns BackendAuditResource
     */
    public getBackendAudit(): BackendAuditResource
    {
        return new BackendAuditResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/app/$app_id<[0-9]+>/token/:token_id
     *
     * @returns BackendAppByAppIdTokenAndTokenIdResource
     */
    public getBackendAppByAppIdTokenAndTokenId(app_id: string, token_id: string): BackendAppByAppIdTokenAndTokenIdResource
    {
        return new BackendAppByAppIdTokenAndTokenIdResource(
            app_id,
            token_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/app/$app_id<[0-9]+>
     *
     * @returns BackendAppByAppIdResource
     */
    public getBackendAppByAppId(app_id: string): BackendAppByAppIdResource
    {
        return new BackendAppByAppIdResource(
            app_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/app
     *
     * @returns BackendAppResource
     */
    public getBackendApp(): BackendAppResource
    {
        return new BackendAppResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/app/token/$token_id<[0-9]+>
     *
     * @returns BackendAppTokenByTokenIdResource
     */
    public getBackendAppTokenByTokenId(token_id: string): BackendAppTokenByTokenIdResource
    {
        return new BackendAppTokenByTokenIdResource(
            token_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/app/token
     *
     * @returns BackendAppTokenResource
     */
    public getBackendAppToken(): BackendAppTokenResource
    {
        return new BackendAppTokenResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/action/$action_id<[0-9]+|^~>
     *
     * @returns BackendActionByActionIdResource
     */
    public getBackendActionByActionId(action_id: string): BackendActionByActionIdResource
    {
        return new BackendActionByActionIdResource(
            action_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/action/execute/:action_id
     *
     * @returns BackendActionExecuteByActionIdResource
     */
    public getBackendActionExecuteByActionId(action_id: string): BackendActionExecuteByActionIdResource
    {
        return new BackendActionExecuteByActionIdResource(
            action_id,
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/action/form
     *
     * @returns BackendActionFormResource
     */
    public getBackendActionForm(): BackendActionFormResource
    {
        return new BackendActionFormResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/action/list
     *
     * @returns BackendActionListResource
     */
    public getBackendActionList(): BackendActionListResource
    {
        return new BackendActionListResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/action
     *
     * @returns BackendActionResource
     */
    public getBackendAction(): BackendActionResource
    {
        return new BackendActionResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/account/change_password
     *
     * @returns BackendAccountChangePasswordResource
     */
    public getBackendAccountChangePassword(): BackendAccountChangePasswordResource
    {
        return new BackendAccountChangePasswordResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

    /**
     * Endpoint: /backend/account
     *
     * @returns BackendAccountResource
     */
    public getBackendAccount(): BackendAccountResource
    {
        return new BackendAccountResource(
            this.baseUrl,
            this.newHttpClient()
        );
    }

}
