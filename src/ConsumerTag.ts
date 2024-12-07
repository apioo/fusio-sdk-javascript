/**
 * ConsumerTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {ConsumerAccountTag} from "./ConsumerAccountTag";
import {ConsumerAppTag} from "./ConsumerAppTag";
import {ConsumerEventTag} from "./ConsumerEventTag";
import {ConsumerGrantTag} from "./ConsumerGrantTag";
import {ConsumerIdentityTag} from "./ConsumerIdentityTag";
import {ConsumerLogTag} from "./ConsumerLogTag";
import {ConsumerPageTag} from "./ConsumerPageTag";
import {ConsumerPaymentTag} from "./ConsumerPaymentTag";
import {ConsumerPlanTag} from "./ConsumerPlanTag";
import {ConsumerScopeTag} from "./ConsumerScopeTag";
import {ConsumerTokenTag} from "./ConsumerTokenTag";
import {ConsumerTransactionTag} from "./ConsumerTransactionTag";
import {ConsumerWebhookTag} from "./ConsumerWebhookTag";

export class ConsumerTag extends TagAbstract {
    public account(): ConsumerAccountTag
    {
        return new ConsumerAccountTag(
            this.httpClient,
            this.parser
        );
    }

    public app(): ConsumerAppTag
    {
        return new ConsumerAppTag(
            this.httpClient,
            this.parser
        );
    }

    public event(): ConsumerEventTag
    {
        return new ConsumerEventTag(
            this.httpClient,
            this.parser
        );
    }

    public grant(): ConsumerGrantTag
    {
        return new ConsumerGrantTag(
            this.httpClient,
            this.parser
        );
    }

    public identity(): ConsumerIdentityTag
    {
        return new ConsumerIdentityTag(
            this.httpClient,
            this.parser
        );
    }

    public log(): ConsumerLogTag
    {
        return new ConsumerLogTag(
            this.httpClient,
            this.parser
        );
    }

    public page(): ConsumerPageTag
    {
        return new ConsumerPageTag(
            this.httpClient,
            this.parser
        );
    }

    public payment(): ConsumerPaymentTag
    {
        return new ConsumerPaymentTag(
            this.httpClient,
            this.parser
        );
    }

    public plan(): ConsumerPlanTag
    {
        return new ConsumerPlanTag(
            this.httpClient,
            this.parser
        );
    }

    public scope(): ConsumerScopeTag
    {
        return new ConsumerScopeTag(
            this.httpClient,
            this.parser
        );
    }

    public token(): ConsumerTokenTag
    {
        return new ConsumerTokenTag(
            this.httpClient,
            this.parser
        );
    }

    public transaction(): ConsumerTransactionTag
    {
        return new ConsumerTransactionTag(
            this.httpClient,
            this.parser
        );
    }

    public webhook(): ConsumerWebhookTag
    {
        return new ConsumerWebhookTag(
            this.httpClient,
            this.parser
        );
    }


}
