/**
 * ConsumerPlanGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPlanByPlanIdResource from "./ConsumerPlanByPlanIdResource";
import ConsumerPlanResource from "./ConsumerPlanResource";
import ConsumerPlanInvoiceByInvoiceIdResource from "./ConsumerPlanInvoiceByInvoiceIdResource";
import ConsumerPlanInvoiceResource from "./ConsumerPlanInvoiceResource";
import ConsumerPlanContractByContractIdResource from "./ConsumerPlanContractByContractIdResource";
import ConsumerPlanContractResource from "./ConsumerPlanContractResource";

export default class ConsumerPlanGroup extends ResourceAbstract {
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
            this.httpClient
        );
    }

}
