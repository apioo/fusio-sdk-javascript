/**
 * ConsumerPasswordResetResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Email} from "./User_Email";
import {Message} from "./Message";
import {User_PasswordReset} from "./User_PasswordReset";

export default class ConsumerPasswordResetResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/password_reset";
    }

    /**
     * @param {User_Email} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserResetPasswordRequest(data: User_Email): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {User_PasswordReset} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserResetPasswordExecute(data: User_PasswordReset): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
