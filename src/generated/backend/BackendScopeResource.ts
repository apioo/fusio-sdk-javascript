/**
 * BackendScopeResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Scope_Collection} from "./Scope_Collection";
import {Scope_Create} from "./Scope_Create";
import {Message} from "./Message";

export default class BackendScopeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/scope";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Scope_Collection>}
     */
    public backendActionScopeGetAll(query?: Collection_Category_Query): AxiosPromise<Scope_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

    /**
     * @param {Scope_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionScopeCreate(data?: Scope_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
