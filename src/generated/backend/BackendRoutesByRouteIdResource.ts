/**
 * BackendRoutesByRouteIdResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Route} from "./Route";
import {Route_Update} from "./Route_Update";
import {Message} from "./Message";

export default class BackendRoutesByRouteIdResource extends ResourceAbstract {
    private url: string;

    private route_id: string;

    public constructor(route_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.route_id = route_id;

        this.url = baseUrl + "/backend/routes/"+route_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Route>>}
     */
    public async backendActionRouteGet(): Promise<AxiosResponse<Route>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Route>(this.url, params);
    }

    /**
     * @param {Route_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRouteUpdate(data: Route_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRouteDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
