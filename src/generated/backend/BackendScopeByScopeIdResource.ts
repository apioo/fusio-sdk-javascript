/**
 * BackendScopeByScopeIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Scope} from "./Scope";
import {Scope_Update} from "./Scope_Update";
import {Message} from "./Message";

export default class BackendScopeByScopeIdResource extends ResourceAbstract {
    private url: string;

    private scope_id: string;

    public constructor(scope_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.scope_id = scope_id;

        this.url = baseUrl + "/backend/scope/"+scope_id+"";
    }

    /**
     * @returns {AxiosPromise<Scope>}
     */
    public backendActionScopeGet(): AxiosPromise<Scope> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Scope>(this.url, params);
    }

    /**
     * @param {Scope_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeUpdate(data?: Scope_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
