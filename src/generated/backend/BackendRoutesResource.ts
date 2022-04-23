/**
 * BackendRoutesResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Route_Collection} from "./Route_Collection";
import {Route_Create} from "./Route_Create";
import {Message} from "./Message";

export default class BackendRoutesResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/routes";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Route_Collection>}
     */
    public backendActionRouteGetAll(query?: Collection_Category_Query): AxiosPromise<Route_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Route_Collection>(this.url, params);
    }

    /**
     * @param {Route_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteCreate(data?: Route_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
