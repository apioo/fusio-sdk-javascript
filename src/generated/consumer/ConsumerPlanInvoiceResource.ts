/**
 * ConsumerPlanInvoiceResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";

export default class ConsumerPlanInvoiceResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/plan/invoice";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Invoice_Collection>}
     */
    public consumerActionPlanInvoiceGetAll(query?: Collection_Query): AxiosPromise<Plan_Invoice_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

}
