/**
 * ConsumerPlanInvoiceByInvoiceIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Invoice} from "./Plan_Invoice";

export default class ConsumerPlanInvoiceByInvoiceIdResource extends ResourceAbstract {
    private url: string;

    private invoice_id: string;

    public constructor(invoice_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.invoice_id = invoice_id;

        this.url = baseUrl + "/consumer/plan/invoice/"+invoice_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan_Invoice>>}
     */
    public async consumerActionPlanInvoiceGet(): Promise<AxiosResponse<Plan_Invoice>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

}
