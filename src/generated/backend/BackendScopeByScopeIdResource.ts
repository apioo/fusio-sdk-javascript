/**
 * BackendScopeByScopeIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Scope} from "./Scope";
import {Scope_Update} from "./Scope_Update";
import {Message} from "./Message";

export default class BackendScopeByScopeIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private scope_id: string;

    public constructor(scope_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.scope_id = scope_id;

        this.url = baseUrl + "/backend/scope/"+scope_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Scope>}
     */
    public backendActionScopeGet(): AxiosPromise<Scope> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Scope>(this.url, params);
    }

    /**
     * @param {Scope_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeUpdate(data?: Scope_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeDelete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
