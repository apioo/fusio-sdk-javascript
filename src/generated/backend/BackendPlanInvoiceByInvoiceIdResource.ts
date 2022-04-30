/**
 * BackendPlanInvoiceByInvoiceIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Invoice} from "./Plan_Invoice";
import {Plan_Invoice_Update} from "./Plan_Invoice_Update";
import {Message} from "./Message";

export default class BackendPlanInvoiceByInvoiceIdResource extends ResourceAbstract {
    private url: string;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.invoice_id = invoice_id;

        this.url = baseUrl + "/backend/plan/invoice/"+invoice_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan_Invoice>}
     */
    public backendActionPlanInvoiceGet(): AxiosPromise<Plan_Invoice> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

    /**
     * @param {Plan_Invoice_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanInvoiceUpdate(data?: Plan_Invoice_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanInvoiceDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
