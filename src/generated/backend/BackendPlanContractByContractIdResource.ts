/**
 * BackendPlanContractByContractIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan_Contract} from "./Plan_Contract";
import {Plan_Contract_Update} from "./Plan_Contract_Update";
import {Message} from "./Message";

export default class BackendPlanContractByContractIdResource extends ResourceAbstract {
    private url: string;

    private contract_id: string;

    public constructor(contract_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.contract_id = contract_id;

        this.url = baseUrl + "/backend/plan/contract/"+contract_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan_Contract>>}
     */
    public async backendActionPlanContractGet(): Promise<AxiosResponse<Plan_Contract>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

    /**
     * @param {Plan_Contract_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanContractUpdate(data: Plan_Contract_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanContractDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
