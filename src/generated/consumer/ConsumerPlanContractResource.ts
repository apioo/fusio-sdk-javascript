/**
 * ConsumerPlanContractResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Contract_Collection} from "./Plan_Contract_Collection";
import {Plan_Order_Request} from "./Plan_Order_Request";
import {Plan_Order_Response} from "./Plan_Order_Response";

export default class ConsumerPlanContractResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan/contract";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Contract_Collection>>}
     */
    public async consumerActionPlanContractGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Contract_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Order_Request} data
     * @returns {Promise<AxiosResponse<Plan_Order_Response>>}
     */
    public async consumerActionPlanContractCreate(data: Plan_Order_Request): Promise<AxiosResponse<Plan_Order_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Plan_Order_Response>(this.url, data, params);
    }

}
