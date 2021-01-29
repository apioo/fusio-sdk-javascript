/**
 * ConsumerLoginResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {User_Login} from "./User_Login";
import {User_JWT} from "./User_JWT";
import {User_Refresh} from "./User_Refresh";

export default class ConsumerLoginResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/login";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {User_Login} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserLogin(data?: User_Login): AxiosPromise<User_JWT> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

    /**
     * @param {User_Refresh} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserRefresh(data?: User_Refresh): AxiosPromise<User_JWT> {
        let params = {
            method: "PUT",
        };

        return this.httpClient.put<User_JWT>(this.url, data, params);
    }

}
