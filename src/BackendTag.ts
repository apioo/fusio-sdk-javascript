/**
 * BackendTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendAccountTag} from "./BackendAccountTag";
import {BackendActionTag} from "./BackendActionTag";
import {BackendAppTag} from "./BackendAppTag";
import {BackendAuditTag} from "./BackendAuditTag";
import {BackendCategoryTag} from "./BackendCategoryTag";
import {BackendConfigTag} from "./BackendConfigTag";
import {BackendConnectionTag} from "./BackendConnectionTag";
import {BackendCronjobTag} from "./BackendCronjobTag";
import {BackendDashboardTag} from "./BackendDashboardTag";
import {BackendEventTag} from "./BackendEventTag";
import {BackendGeneratorTag} from "./BackendGeneratorTag";
import {BackendIdentityTag} from "./BackendIdentityTag";
import {BackendLogTag} from "./BackendLogTag";
import {BackendMarketplaceTag} from "./BackendMarketplaceTag";
import {BackendOperationTag} from "./BackendOperationTag";
import {BackendPageTag} from "./BackendPageTag";
import {BackendPlanTag} from "./BackendPlanTag";
import {BackendRateTag} from "./BackendRateTag";
import {BackendRoleTag} from "./BackendRoleTag";
import {BackendSchemaTag} from "./BackendSchemaTag";
import {BackendScopeTag} from "./BackendScopeTag";
import {BackendSdkTag} from "./BackendSdkTag";
import {BackendStatisticTag} from "./BackendStatisticTag";
import {BackendTenantTag} from "./BackendTenantTag";
import {BackendTransactionTag} from "./BackendTransactionTag";
import {BackendTrashTag} from "./BackendTrashTag";
import {BackendUserTag} from "./BackendUserTag";
import {BackendWebhookTag} from "./BackendWebhookTag";

export class BackendTag extends TagAbstract {
    public webhook(): BackendWebhookTag
    {
        return new BackendWebhookTag(
            this.httpClient,
            this.parser
        );
    }

    public user(): BackendUserTag
    {
        return new BackendUserTag(
            this.httpClient,
            this.parser
        );
    }

    public trash(): BackendTrashTag
    {
        return new BackendTrashTag(
            this.httpClient,
            this.parser
        );
    }

    public transaction(): BackendTransactionTag
    {
        return new BackendTransactionTag(
            this.httpClient,
            this.parser
        );
    }

    public tenant(): BackendTenantTag
    {
        return new BackendTenantTag(
            this.httpClient,
            this.parser
        );
    }

    public statistic(): BackendStatisticTag
    {
        return new BackendStatisticTag(
            this.httpClient,
            this.parser
        );
    }

    public sdk(): BackendSdkTag
    {
        return new BackendSdkTag(
            this.httpClient,
            this.parser
        );
    }

    public scope(): BackendScopeTag
    {
        return new BackendScopeTag(
            this.httpClient,
            this.parser
        );
    }

    public schema(): BackendSchemaTag
    {
        return new BackendSchemaTag(
            this.httpClient,
            this.parser
        );
    }

    public operation(): BackendOperationTag
    {
        return new BackendOperationTag(
            this.httpClient,
            this.parser
        );
    }

    public role(): BackendRoleTag
    {
        return new BackendRoleTag(
            this.httpClient,
            this.parser
        );
    }

    public rate(): BackendRateTag
    {
        return new BackendRateTag(
            this.httpClient,
            this.parser
        );
    }

    public plan(): BackendPlanTag
    {
        return new BackendPlanTag(
            this.httpClient,
            this.parser
        );
    }

    public page(): BackendPageTag
    {
        return new BackendPageTag(
            this.httpClient,
            this.parser
        );
    }

    public marketplace(): BackendMarketplaceTag
    {
        return new BackendMarketplaceTag(
            this.httpClient,
            this.parser
        );
    }

    public log(): BackendLogTag
    {
        return new BackendLogTag(
            this.httpClient,
            this.parser
        );
    }

    public identity(): BackendIdentityTag
    {
        return new BackendIdentityTag(
            this.httpClient,
            this.parser
        );
    }

    public generator(): BackendGeneratorTag
    {
        return new BackendGeneratorTag(
            this.httpClient,
            this.parser
        );
    }

    public event(): BackendEventTag
    {
        return new BackendEventTag(
            this.httpClient,
            this.parser
        );
    }

    public dashboard(): BackendDashboardTag
    {
        return new BackendDashboardTag(
            this.httpClient,
            this.parser
        );
    }

    public cronjob(): BackendCronjobTag
    {
        return new BackendCronjobTag(
            this.httpClient,
            this.parser
        );
    }

    public connection(): BackendConnectionTag
    {
        return new BackendConnectionTag(
            this.httpClient,
            this.parser
        );
    }

    public config(): BackendConfigTag
    {
        return new BackendConfigTag(
            this.httpClient,
            this.parser
        );
    }

    public category(): BackendCategoryTag
    {
        return new BackendCategoryTag(
            this.httpClient,
            this.parser
        );
    }

    public audit(): BackendAuditTag
    {
        return new BackendAuditTag(
            this.httpClient,
            this.parser
        );
    }

    public app(): BackendAppTag
    {
        return new BackendAppTag(
            this.httpClient,
            this.parser
        );
    }

    public action(): BackendActionTag
    {
        return new BackendActionTag(
            this.httpClient,
            this.parser
        );
    }

    public account(): BackendAccountTag
    {
        return new BackendAccountTag(
            this.httpClient,
            this.parser
        );
    }


}
