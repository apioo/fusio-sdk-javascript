/**
 * BackendScopeByScopeIdResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Scope} from "./Scope";
import {Scope_Update} from "./Scope_Update";
import {Message} from "./Message";

export default class BackendScopeByScopeIdResource extends ResourceAbstract {
    private url: string;

    private scope_id: string;

    public constructor(scope_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.scope_id = scope_id;

        this.url = baseUrl + "/backend/scope/"+scope_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Scope>>}
     */
    public async backendActionScopeGet(): Promise<AxiosResponse<Scope>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Scope>(this.url, params);
    }

    /**
     * @param {Scope_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionScopeUpdate(data: Scope_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionScopeDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
