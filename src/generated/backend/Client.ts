/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {ClientAbstract, TokenStoreInterface} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {UserTag} from "./UserTag";
import {TrashTag} from "./TrashTag";
import {TransactionTag} from "./TransactionTag";
import {StatisticTag} from "./StatisticTag";
import {SdkTag} from "./SdkTag";
import {ScopeTag} from "./ScopeTag";
import {SchemaTag} from "./SchemaTag";
import {OperationTag} from "./OperationTag";
import {RoleTag} from "./RoleTag";
import {RateTag} from "./RateTag";
import {PlanTag} from "./PlanTag";
import {PageTag} from "./PageTag";
import {MarketplaceTag} from "./MarketplaceTag";
import {LogTag} from "./LogTag";
import {GeneratorTag} from "./GeneratorTag";
import {EventTag} from "./EventTag";
import {DashboardTag} from "./DashboardTag";
import {CronjobTag} from "./CronjobTag";
import {ConnectionTag} from "./ConnectionTag";
import {ConfigTag} from "./ConfigTag";
import {CategoryTag} from "./CategoryTag";
import {AuditTag} from "./AuditTag";
import {AppTag} from "./AppTag";
import {ActionTag} from "./ActionTag";
import {AccountTag} from "./AccountTag";

export class Client extends ClientAbstract {
    public user(): UserTag
    {
        return new UserTag(
            this.httpClient,
            this.parser
        );
    }

    public trash(): TrashTag
    {
        return new TrashTag(
            this.httpClient,
            this.parser
        );
    }

    public transaction(): TransactionTag
    {
        return new TransactionTag(
            this.httpClient,
            this.parser
        );
    }

    public statistic(): StatisticTag
    {
        return new StatisticTag(
            this.httpClient,
            this.parser
        );
    }

    public sdk(): SdkTag
    {
        return new SdkTag(
            this.httpClient,
            this.parser
        );
    }

    public scope(): ScopeTag
    {
        return new ScopeTag(
            this.httpClient,
            this.parser
        );
    }

    public schema(): SchemaTag
    {
        return new SchemaTag(
            this.httpClient,
            this.parser
        );
    }

    public operation(): OperationTag
    {
        return new OperationTag(
            this.httpClient,
            this.parser
        );
    }

    public role(): RoleTag
    {
        return new RoleTag(
            this.httpClient,
            this.parser
        );
    }

    public rate(): RateTag
    {
        return new RateTag(
            this.httpClient,
            this.parser
        );
    }

    public plan(): PlanTag
    {
        return new PlanTag(
            this.httpClient,
            this.parser
        );
    }

    public page(): PageTag
    {
        return new PageTag(
            this.httpClient,
            this.parser
        );
    }

    public marketplace(): MarketplaceTag
    {
        return new MarketplaceTag(
            this.httpClient,
            this.parser
        );
    }

    public log(): LogTag
    {
        return new LogTag(
            this.httpClient,
            this.parser
        );
    }

    public generator(): GeneratorTag
    {
        return new GeneratorTag(
            this.httpClient,
            this.parser
        );
    }

    public event(): EventTag
    {
        return new EventTag(
            this.httpClient,
            this.parser
        );
    }

    public dashboard(): DashboardTag
    {
        return new DashboardTag(
            this.httpClient,
            this.parser
        );
    }

    public cronjob(): CronjobTag
    {
        return new CronjobTag(
            this.httpClient,
            this.parser
        );
    }

    public connection(): ConnectionTag
    {
        return new ConnectionTag(
            this.httpClient,
            this.parser
        );
    }

    public config(): ConfigTag
    {
        return new ConfigTag(
            this.httpClient,
            this.parser
        );
    }

    public category(): CategoryTag
    {
        return new CategoryTag(
            this.httpClient,
            this.parser
        );
    }

    public audit(): AuditTag
    {
        return new AuditTag(
            this.httpClient,
            this.parser
        );
    }

    public app(): AppTag
    {
        return new AppTag(
            this.httpClient,
            this.parser
        );
    }

    public action(): ActionTag
    {
        return new ActionTag(
            this.httpClient,
            this.parser
        );
    }

    public account(): AccountTag
    {
        return new AccountTag(
            this.httpClient,
            this.parser
        );
    }



}
