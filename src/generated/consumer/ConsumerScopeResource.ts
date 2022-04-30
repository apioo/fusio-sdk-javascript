/**
 * ConsumerScopeResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Scope_Collection} from "./Scope_Collection";

export default class ConsumerScopeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/scope";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Scope_Collection>}
     */
    public consumerActionScopeGetAll(query?: Collection_Query): AxiosPromise<Scope_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

}
