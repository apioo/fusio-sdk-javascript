/**
 * ConsumerAccountResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Account} from "./User_Account";
import {Message} from "./Message";

export default class ConsumerAccountResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/account";
    }

    /**
     * @returns {Promise<AxiosResponse<User_Account>>}
     */
    public async consumerActionUserGet(): Promise<AxiosResponse<User_Account>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<User_Account>(this.url, params);
    }

    /**
     * @param {User_Account} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserUpdate(data: User_Account): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
