/**
 * BackendPlanContractByContractIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Contract} from "./Plan_Contract";
import {Plan_Contract_Update} from "./Plan_Contract_Update";
import {Message} from "./Message";

export default class BackendPlanContractByContractIdResource extends ResourceAbstract {
    private url: string;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.contract_id = contract_id;

        this.url = baseUrl + "/backend/plan/contract/"+contract_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan_Contract>}
     */
    public backendActionPlanContractGet(): AxiosPromise<Plan_Contract> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

    /**
     * @param {Plan_Contract_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanContractUpdate(data?: Plan_Contract_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanContractDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
