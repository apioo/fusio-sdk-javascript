/**
 * BackendPageByPageIdResource generated on 2022-07-01
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Page} from "./Page";
import {Page_Update} from "./Page_Update";
import {Message} from "./Message";

export default class BackendPageByPageIdResource extends ResourceAbstract {
    private url: string;

    private page_id: string;

    public constructor(page_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.page_id = page_id;

        this.url = baseUrl + "/backend/page/"+page_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Page>>}
     */
    public async backendActionPageGet(): Promise<AxiosResponse<Page>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Page>(this.url, params);
    }

    /**
     * @param {Page_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPageUpdate(data: Page_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionPageDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
