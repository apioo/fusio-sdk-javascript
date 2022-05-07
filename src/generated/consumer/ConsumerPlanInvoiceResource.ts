/**
 * ConsumerPlanInvoiceResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";

export default class ConsumerPlanInvoiceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan/invoice";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Invoice_Collection>>}
     */
    public async consumerActionPlanInvoiceGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Invoice_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

}
