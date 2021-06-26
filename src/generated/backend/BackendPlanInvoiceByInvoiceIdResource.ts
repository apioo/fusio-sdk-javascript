/**
 * BackendPlanInvoiceByInvoiceIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Plan_Invoice} from "./Plan_Invoice";
import {Plan_Invoice_Update} from "./Plan_Invoice_Update";
import {Message} from "./Message";

export default class BackendPlanInvoiceByInvoiceIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.invoice_id = invoice_id;

        this.url = baseUrl + "/backend/plan/invoice/"+invoice_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan_Invoice>}
     */
    public backendActionPlanInvoiceGet(): AxiosPromise<Plan_Invoice> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
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
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanInvoiceDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
