/**
 * BackendUserByUserIdResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User} from "./User";
import {User_Update} from "./User_Update";
import {Message} from "./Message";

export default class BackendUserByUserIdResource extends ResourceAbstract {
    private url: string;

    private user_id: string;

    public constructor(user_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user_id = user_id;

        this.url = baseUrl + "/backend/user/"+user_id+"";
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
     * @param {User_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionUserUpdate(data: User_Update): Promise<AxiosResponse<Message>> {
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
