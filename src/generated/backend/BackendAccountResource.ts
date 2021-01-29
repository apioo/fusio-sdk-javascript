/**
 * BackendAccountResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {User} from "./User";
import {User_Update} from "./User_Update";
import {Message} from "./Message";

export default class BackendAccountResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/account";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<User>}
     */
    public backendActionAccountGet(): AxiosPromise<User> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<User>(this.url, params);
    }

    /**
     * @param {User_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAccountUpdate(data?: User_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
