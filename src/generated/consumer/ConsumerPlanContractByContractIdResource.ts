/**
 * ConsumerPlanContractByContractIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Plan_Contract} from "./Plan_Contract";

export default class ConsumerPlanContractByContractIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.contract_id = contract_id;

        this.url = baseUrl + "/consumer/plan/contract/"+contract_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan_Contract>}
     */
    public consumerActionPlanContractGet(): AxiosPromise<Plan_Contract> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

}
