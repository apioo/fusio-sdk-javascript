/**
 * ConsumerPlanContractResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Contract_Collection} from "./Plan_Contract_Collection";
import {Plan_Order_Request} from "./Plan_Order_Request";
import {Plan_Order_Response} from "./Plan_Order_Response";

export default class ConsumerPlanContractResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan/contract";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Contract_Collection>}
     */
    public consumerActionPlanContractGetAll(query?: Collection_Query): AxiosPromise<Plan_Contract_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Order_Request} data
     * @returns {AxiosPromise<Plan_Order_Response>}
     */
    public consumerActionPlanContractCreate(data?: Plan_Order_Request): AxiosPromise<Plan_Order_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Plan_Order_Response>(this.url, data, params);
    }

}
