/**
 * ConsumerAccountResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {User_Account} from "./User_Account";
import {Message} from "./Message";

export default class ConsumerAccountResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/account";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<User_Account>}
     */
    public consumerActionUserGet(): AxiosPromise<User_Account> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<User_Account>(this.url, params);
    }

    /**
     * @param {User_Account} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserUpdate(data?: User_Account): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
