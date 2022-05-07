/**
 * BackendScopeResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Scope_Collection} from "./Scope_Collection";
import {Scope_Create} from "./Scope_Create";
import {Message} from "./Message";

export default class BackendScopeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/scope";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Scope_Collection>>}
     */
    public async backendActionScopeGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Scope_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

    /**
     * @param {Scope_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionScopeCreate(data: Scope_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
