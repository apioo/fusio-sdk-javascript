/**
 * BackendRoleByRoleIdResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Role} from "./Role";
import {Role_Update} from "./Role_Update";
import {Message} from "./Message";

export default class BackendRoleByRoleIdResource extends ResourceAbstract {
    private url: string;

    private role_id: string;

    public constructor(role_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.role_id = role_id;

        this.url = baseUrl + "/backend/role/"+role_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Role>>}
     */
    public async backendActionRoleGet(): Promise<AxiosResponse<Role>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Role>(this.url, params);
    }

    /**
     * @param {Role_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRoleUpdate(data: Role_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRoleDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
