/**
 * ConsumerAppByAppIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App} from "./App";
import {App_Update} from "./App_Update";
import {Message} from "./Message";

export default class ConsumerAppByAppIdResource extends ResourceAbstract {
    private url: string;

    private app_id: string;

    public constructor(app_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_id = app_id;

        this.url = baseUrl + "/consumer/app/"+app_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<App>>}
     */
    public async consumerActionAppGet(): Promise<AxiosResponse<App>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<App>(this.url, params);
    }

    /**
     * @param {App_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionAppUpdate(data?: App_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionAppDelete(): Promise<AxiosResponse<Message>> {
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
