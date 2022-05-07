/**
 * ConsumerPlanContractByContractIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Contract} from "./Plan_Contract";

export default class ConsumerPlanContractByContractIdResource extends ResourceAbstract {
    private url: string;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.contract_id = contract_id;

        this.url = baseUrl + "/consumer/plan/contract/"+contract_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan_Contract>>}
     */
    public async consumerActionPlanContractGet(): Promise<AxiosResponse<Plan_Contract>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

}
