/**
 * BackendRoutesProviderResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Route_Index_Providers} from "./Route_Index_Providers";

export default class BackendRoutesProviderResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/routes/provider";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Route_Index_Providers>}
     */
    public backendActionRouteProviderIndex(): AxiosPromise<Route_Index_Providers> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Route_Index_Providers>(this.url, params);
    }

}
