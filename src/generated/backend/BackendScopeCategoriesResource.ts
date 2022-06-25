/**
 * BackendScopeCategoriesResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Scope_Categories} from "./Scope_Categories";

export default class BackendScopeCategoriesResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/scope/categories";
    }

    /**
     * @returns {Promise<AxiosResponse<Scope_Categories>>}
     */
    public async backendActionScopeGetCategories(): Promise<AxiosResponse<Scope_Categories>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Scope_Categories>(this.url, params);
    }

}
