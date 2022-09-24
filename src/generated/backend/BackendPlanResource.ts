/**
 * BackendPlanResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {CollectionQuery} from "./CollectionQuery";
import {PlanCollection} from "./PlanCollection";
import {PlanCreate} from "./PlanCreate";
import {Message} from "./Message";

export default class BackendPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan";
    }

    /**
     * @param {CollectionQuery} query
     * @returns {Promise<AxiosResponse<PlanCollection>>}
     */
    public async backendActionPlanGetAll(query?: CollectionQuery): Promise<AxiosResponse<PlanCollection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<PlanCollection>(this.url, params);
    }

    /**
     * @param {PlanCreate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPlanCreate(data: PlanCreate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
