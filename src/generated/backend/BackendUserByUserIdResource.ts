/**
 * BackendUserByUserIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User} from "./User";
import {UserUpdate} from "./UserUpdate";
import {Message} from "./Message";

export default class BackendUserByUserIdResource extends ResourceAbstract {
    private url: string;

    private userId: string;

    public constructor(userId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.userId = userId;

        this.url = baseUrl + "/backend/user/"+userId+"";
    }

    /**
     * @returns {Promise<AxiosResponse<User>>}
     */
    public async backendActionUserGet(): Promise<AxiosResponse<User>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<User>(this.url, params);
    }

    /**
     * @param {UserUpdate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionUserUpdate(data: UserUpdate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionUserDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
