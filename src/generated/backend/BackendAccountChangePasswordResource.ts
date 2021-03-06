/**
 * BackendAccountChangePasswordResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Account_ChangePassword} from "./Account_ChangePassword";
import {Message} from "./Message";

export default class BackendAccountChangePasswordResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/account/change_password";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Account_ChangePassword} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAccountChangePassword(data?: Account_ChangePassword): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
