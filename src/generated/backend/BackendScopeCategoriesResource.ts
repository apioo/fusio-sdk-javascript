/**
 * BackendScopeCategoriesResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Scope_Categories} from "./Scope_Categories";

export default class BackendScopeCategoriesResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/scope/categories";
    }

    /**
     * @returns {AxiosPromise<Scope_Categories>}
     */
    public backendActionScopeGetCategories(): AxiosPromise<Scope_Categories> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Scope_Categories>(this.url, params);
    }

}
