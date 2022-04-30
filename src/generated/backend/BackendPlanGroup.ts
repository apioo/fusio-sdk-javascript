/**
 * BackendPlanGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendPlanByPlanIdResource from "./BackendPlanByPlanIdResource";
import BackendPlanResource from "./BackendPlanResource";
import BackendPlanInvoiceByInvoiceIdResource from "./BackendPlanInvoiceByInvoiceIdResource";
import BackendPlanInvoiceResource from "./BackendPlanInvoiceResource";
import BackendPlanContractByContractIdResource from "./BackendPlanContractByContractIdResource";
import BackendPlanContractResource from "./BackendPlanContractResource";

export default class BackendPlanGroup extends ResourceAbstract {
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
            this.httpClient
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
            this.httpClient
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
            this.httpClient
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
            this.httpClient
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
            this.httpClient
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
            this.httpClient
        );
    }

}
