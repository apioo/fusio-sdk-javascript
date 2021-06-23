/**
 * BackendPlanInvoiceResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";
import {Plan_Invoice_Create} from "./Plan_Invoice_Create";
import {Message} from "./Message";

export default class BackendPlanInvoiceResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/plan/invoice";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Invoice_Collection>}
     */
    public backendActionPlanInvoiceGetAll(query?: Collection_Query): AxiosPromise<Plan_Invoice_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Invoice_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanInvoiceCreate(data?: Plan_Invoice_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
