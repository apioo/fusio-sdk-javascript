/**
 * BackendRoleResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Role_Collection} from "./Role_Collection";
import {Role_Create} from "./Role_Create";
import {Message} from "./Message";

export default class BackendRoleResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/role";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Role_Collection>>}
     */
    public async backendActionRoleGetAll(query?: Collection_Query): Promise<AxiosResponse<Role_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Role_Collection>(this.url, params);
    }

    /**
     * @param {Role_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRoleCreate(data: Role_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
