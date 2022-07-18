/**
 * BackendAccountResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User} from "./User";
import {User_Update} from "./User_Update";
import {Message} from "./Message";

export default class BackendAccountResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/account";
    }

    /**
     * @returns {Promise<AxiosResponse<User>>}
     */
    public async backendActionAccountGet(): Promise<AxiosResponse<User>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<User>(this.url, params);
    }

    /**
     * @param {User_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionAccountUpdate(data: User_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
