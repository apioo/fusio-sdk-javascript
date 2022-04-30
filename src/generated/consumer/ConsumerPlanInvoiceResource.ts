/**
 * ConsumerPlanInvoiceResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Invoice_Collection} from "./Plan_Invoice_Collection";

export default class ConsumerPlanInvoiceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan/invoice";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Invoice_Collection>}
     */
    public consumerActionPlanInvoiceGetAll(query?: Collection_Query): AxiosPromise<Plan_Invoice_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

}
