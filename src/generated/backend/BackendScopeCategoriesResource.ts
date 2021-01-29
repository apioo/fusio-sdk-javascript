/**
 * BackendScopeCategoriesResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Scope_Categories} from "./Scope_Categories";

export default class BackendScopeCategoriesResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/scope/categories";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Scope_Categories>}
     */
    public backendActionScopeGetCategories(): AxiosPromise<Scope_Categories> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Scope_Categories>(this.url, params);
    }

}
