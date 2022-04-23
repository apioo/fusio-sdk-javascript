/**
 * ConsumerPlanContractByContractIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Contract} from "./Plan_Contract";

export default class ConsumerPlanContractByContractIdResource extends ResourceAbstract {
    private url: string;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.contract_id = contract_id;

        this.url = baseUrl + "/consumer/plan/contract/"+contract_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan_Contract>}
     */
    public consumerActionPlanContractGet(): AxiosPromise<Plan_Contract> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

}
