/**
 * ConsumerPlanContractResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Collection_Query} from "./Collection_Query";
import {Plan_Contract_Collection} from "./Plan_Contract_Collection";
import {Plan_Order_Request} from "./Plan_Order_Request";
import {Plan_Order_Response} from "./Plan_Order_Response";

export default class ConsumerPlanContractResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/plan/contract";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Contract_Collection>}
     */
    public consumerActionPlanContractGetAll(query?: Collection_Query): AxiosPromise<Plan_Contract_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Order_Request} data
     * @returns {AxiosPromise<Plan_Order_Response>}
     */
    public consumerActionPlanContractCreate(data?: Plan_Order_Request): AxiosPromise<Plan_Order_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Plan_Order_Response>(this.url, data, params);
    }

}
