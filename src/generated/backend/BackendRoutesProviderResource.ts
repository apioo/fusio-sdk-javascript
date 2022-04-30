/**
 * BackendRoutesProviderResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Route_Index_Providers} from "./Route_Index_Providers";

export default class BackendRoutesProviderResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/routes/provider";
    }

    /**
     * @returns {AxiosPromise<Route_Index_Providers>}
     */
    public backendActionRouteProviderIndex(): AxiosPromise<Route_Index_Providers> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Route_Index_Providers>(this.url, params);
    }

}
