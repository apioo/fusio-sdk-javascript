/**
 * ConsumerAuthorizeResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Authorize_Meta} from "./Authorize_Meta";
import {Authorize_Request} from "./Authorize_Request";
import {Authorize_Response} from "./Authorize_Response";

export default class ConsumerAuthorizeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/authorize";
    }

    /**
     * @returns {Promise<AxiosResponse<Authorize_Meta>>}
     */
    public async consumerActionUserGetApp(): Promise<AxiosResponse<Authorize_Meta>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Authorize_Meta>(this.url, params);
    }

    /**
     * @param {Authorize_Request} data
     * @returns {Promise<AxiosResponse<Authorize_Response>>}
     */
    public async consumerActionUserAuthorize(data: Authorize_Request): Promise<AxiosResponse<Authorize_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Authorize_Response>(this.url, data, params);
    }

}
