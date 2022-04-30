/**
 * BackendRoutesByRouteIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Route} from "./Route";
import {Route_Update} from "./Route_Update";
import {Message} from "./Message";

export default class BackendRoutesByRouteIdResource extends ResourceAbstract {
    private url: string;

    private route_id: string;

    public constructor(route_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.route_id = route_id;

        this.url = baseUrl + "/backend/routes/"+route_id+"";
    }

    /**
     * @returns {AxiosPromise<Route>}
     */
    public backendActionRouteGet(): AxiosPromise<Route> {
        let params = {
            method: <Method> "GET",
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
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
