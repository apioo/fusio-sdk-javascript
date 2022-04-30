/**
 * BackendPlanContractResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Contract_Collection} from "./Plan_Contract_Collection";
import {Plan_Contract_Create} from "./Plan_Contract_Create";
import {Message} from "./Message";

export default class BackendPlanContractResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan/contract";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Contract_Collection>>}
     */
    public async backendActionPlanContractGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Contract_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Contract_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanContractCreate(data?: Plan_Contract_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
