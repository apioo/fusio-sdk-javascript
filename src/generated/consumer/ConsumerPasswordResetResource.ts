/**
 * ConsumerPasswordResetResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {User_Email} from "./User_Email";
import {Message} from "./Message";
import {User_PasswordReset} from "./User_PasswordReset";

export default class ConsumerPasswordResetResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/password_reset";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {User_Email} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserResetPasswordRequest(data?: User_Email): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {User_PasswordReset} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserResetPasswordExecute(data?: User_PasswordReset): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
