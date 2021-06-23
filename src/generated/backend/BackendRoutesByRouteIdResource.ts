/**
 * BackendRoutesByRouteIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Route} from "./Route";
import {Route_Update} from "./Route_Update";
import {Message} from "./Message";

export default class BackendRoutesByRouteIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private route_id: string;

    public constructor(route_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.route_id = route_id;

        this.url = baseUrl + "/backend/routes/"+route_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Route>}
     */
    public backendActionRouteGet(): AxiosPromise<Route> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Route>(this.url, params);
    }

    /**
     * @param {Route_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteUpdate(data?: Route_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
