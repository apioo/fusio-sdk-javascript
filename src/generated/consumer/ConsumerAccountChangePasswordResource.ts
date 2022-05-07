/**
 * ConsumerAccountChangePasswordResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Account_ChangePassword} from "./Account_ChangePassword";
import {Message} from "./Message";

export default class ConsumerAccountChangePasswordResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/account/change_password";
    }

    /**
     * @param {Account_ChangePassword} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserChangePassword(data: Account_ChangePassword): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
