/**
 * BackendPlanInvoiceByInvoiceIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Invoice} from "./Plan_Invoice";
import {Plan_Invoice_Update} from "./Plan_Invoice_Update";
import {Message} from "./Message";

export default class BackendPlanInvoiceByInvoiceIdResource extends ResourceAbstract {
    private url: string;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.invoice_id = invoice_id;

        this.url = baseUrl + "/backend/plan/invoice/"+invoice_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan_Invoice>>}
     */
    public async backendActionPlanInvoiceGet(): Promise<AxiosResponse<Plan_Invoice>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

    /**
     * @param {Plan_Invoice_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanInvoiceUpdate(data: Plan_Invoice_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanInvoiceDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
