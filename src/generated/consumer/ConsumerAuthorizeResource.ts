/**
 * ConsumerAuthorizeResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {AuthorizeMeta} from "./AuthorizeMeta";
import {AuthorizeRequest} from "./AuthorizeRequest";
import {AuthorizeResponse} from "./AuthorizeResponse";

export default class ConsumerAuthorizeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/authorize";
    }

    /**
     * @returns {Promise<AxiosResponse<AuthorizeMeta>>}
     */
    public async consumerActionUserGetApp(): Promise<AxiosResponse<AuthorizeMeta>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<AuthorizeMeta>(this.url, params);
    }

    /**
     * @param {AuthorizeRequest} data
     * @returns {Promise<AxiosResponse<AuthorizeResponse>>}
     */
    public async consumerActionUserAuthorize(data: AuthorizeRequest): Promise<AxiosResponse<AuthorizeResponse>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<AuthorizeResponse>(this.url, data, params);
    }

}
