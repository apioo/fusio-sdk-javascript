/**
 * BackendMarketplaceByAppNameResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Marketplace_Local_App} from "./Marketplace_Local_App";
import {Message} from "./Message";

export default class BackendMarketplaceByAppNameResource extends ResourceAbstract {
    private url: string;

    private app_name: string;

    public constructor(app_name: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_name = app_name;

        this.url = baseUrl + "/backend/marketplace/"+app_name+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Marketplace_Local_App>>}
     */
    public async backendActionMarketplaceGet(): Promise<AxiosResponse<Marketplace_Local_App>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Marketplace_Local_App>(this.url, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionMarketplaceUpdate(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.put<Message>(this.url, null, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionMarketplaceRemove(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
