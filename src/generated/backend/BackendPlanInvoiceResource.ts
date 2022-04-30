/**
 * BackendPlanInvoiceResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";
import {Plan_Invoice_Create} from "./Plan_Invoice_Create";
import {Message} from "./Message";

export default class BackendPlanInvoiceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan/invoice";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Invoice_Collection>>}
     */
    public async backendActionPlanInvoiceGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Invoice_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Invoice_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanInvoiceCreate(data?: Plan_Invoice_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
