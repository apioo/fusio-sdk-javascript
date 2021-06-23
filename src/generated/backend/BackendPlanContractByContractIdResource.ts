/**
 * BackendPlanContractByContractIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Plan_Contract} from "./Plan_Contract";
import {Plan_Contract_Update} from "./Plan_Contract_Update";
import {Message} from "./Message";

export default class BackendPlanContractByContractIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.contract_id = contract_id;

        this.url = baseUrl + "/backend/plan/contract/"+contract_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan_Contract>}
     */
    public backendActionPlanContractGet(): AxiosPromise<Plan_Contract> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
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
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanContractDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
