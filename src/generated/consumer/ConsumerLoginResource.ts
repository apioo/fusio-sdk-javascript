/**
 * ConsumerLoginResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Login} from "./User_Login";
import {User_JWT} from "./User_JWT";
import {User_Refresh} from "./User_Refresh";

export default class ConsumerLoginResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/login";
    }

    /**
     * @param {User_Login} data
     * @returns {Promise<AxiosResponse<User_JWT>>}
     */
    public async consumerActionUserLogin(data: User_Login): Promise<AxiosResponse<User_JWT>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

    /**
     * @param {User_Refresh} data
     * @returns {Promise<AxiosResponse<User_JWT>>}
     */
    public async consumerActionUserRefresh(data: User_Refresh): Promise<AxiosResponse<User_JWT>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<User_JWT>(this.url, data, params);
    }

}
