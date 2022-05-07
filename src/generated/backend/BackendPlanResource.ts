/**
 * BackendPlanResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Collection} from "./Plan_Collection";
import {Plan_Create} from "./Plan_Create";
import {Message} from "./Message";

export default class BackendPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Plan_Collection>>}
     */
    public async backendActionPlanGetAll(query?: Collection_Query): Promise<AxiosResponse<Plan_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanCreate(data: Plan_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
