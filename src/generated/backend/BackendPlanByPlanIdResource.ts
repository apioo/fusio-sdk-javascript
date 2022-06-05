/**
 * BackendPlanByPlanIdResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan} from "./Plan";
import {Plan_Update} from "./Plan_Update";
import {Message} from "./Message";

export default class BackendPlanByPlanIdResource extends ResourceAbstract {
    private url: string;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.plan_id = plan_id;

        this.url = baseUrl + "/backend/plan/"+plan_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Plan>>}
     */
    public async backendActionPlanGet(): Promise<AxiosResponse<Plan>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

    /**
     * @param {Plan_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanUpdate(data: Plan_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
