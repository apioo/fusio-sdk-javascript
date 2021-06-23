/**
 * ConsumerPlanInvoiceByInvoiceIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Plan_Invoice} from "./Plan_Invoice";

export default class ConsumerPlanInvoiceByInvoiceIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.invoice_id = invoice_id;

        this.url = baseUrl + "/consumer/plan/invoice/"+invoice_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan_Invoice>}
     */
    public consumerActionPlanInvoiceGet(): AxiosPromise<Plan_Invoice> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

}
