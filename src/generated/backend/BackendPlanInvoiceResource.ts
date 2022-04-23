/**
 * BackendPlanInvoiceResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";
import {Plan_Invoice_Create} from "./Plan_Invoice_Create";
import {Message} from "./Message";

export default class BackendPlanInvoiceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan/invoice";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Invoice_Collection>}
     */
    public backendActionPlanInvoiceGetAll(query?: Collection_Query): AxiosPromise<Plan_Invoice_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
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
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
