/**
 * BackendAppByAppIdResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App} from "./App";
import {App_Update} from "./App_Update";
import {Message} from "./Message";

export default class BackendAppByAppIdResource extends ResourceAbstract {
    private url: string;

    private app_id: string;

    public constructor(app_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_id = app_id;

        this.url = baseUrl + "/backend/app/"+app_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<App>>}
     */
    public async backendActionAppGet(): Promise<AxiosResponse<App>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<App>(this.url, params);
    }

    /**
     * @param {App_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionAppUpdate(data: App_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionAppDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
