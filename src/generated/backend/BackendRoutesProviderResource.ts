/**
 * BackendRoutesProviderResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Route_Index_Providers} from "./Route_Index_Providers";

export default class BackendRoutesProviderResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/routes/provider";
    }

    /**
     * @returns {Promise<AxiosResponse<Route_Index_Providers>>}
     */
    public async backendActionRouteProviderIndex(): Promise<AxiosResponse<Route_Index_Providers>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Route_Index_Providers>(this.url, params);
    }

}
