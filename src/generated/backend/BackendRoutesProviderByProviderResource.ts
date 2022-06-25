/**
 * BackendRoutesProviderByProviderResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Form_Container} from "./Form_Container";
import {Route_Provider} from "./Route_Provider";
import {Message} from "./Message";
import {Route_Provider_Config} from "./Route_Provider_Config";
import {Route_Provider_Changelog} from "./Route_Provider_Changelog";

export default class BackendRoutesProviderByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/backend/routes/provider/"+provider+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Form_Container>>}
     */
    public async backendActionRouteProviderForm(): Promise<AxiosResponse<Form_Container>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

    /**
     * @param {Route_Provider} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRouteProviderCreate(data: Route_Provider): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {Route_Provider_Config} data
     * @returns {Promise<AxiosResponse<Route_Provider_Changelog>>}
     */
    public async backendActionRouteProviderChangelog(data: Route_Provider_Config): Promise<AxiosResponse<Route_Provider_Changelog>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Route_Provider_Changelog>(this.url, data, params);
    }

}
