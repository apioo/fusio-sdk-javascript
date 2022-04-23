/**
 * ConsumerPlanInvoiceByInvoiceIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Invoice} from "./Plan_Invoice";

export default class ConsumerPlanInvoiceByInvoiceIdResource extends ResourceAbstract {
    private url: string;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.invoice_id = invoice_id;

        this.url = baseUrl + "/consumer/plan/invoice/"+invoice_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan_Invoice>}
     */
    public consumerActionPlanInvoiceGet(): AxiosPromise<Plan_Invoice> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

}
