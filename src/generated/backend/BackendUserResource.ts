/**
 * BackendUserResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {User_Collection} from "./User_Collection";
import {User_Create} from "./User_Create";
import {Message} from "./Message";

export default class BackendUserResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/user";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<User_Collection>>}
     */
    public async backendActionUserGetAll(query?: Collection_Query): Promise<AxiosResponse<User_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<User_Collection>(this.url, params);
    }

    /**
     * @param {User_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionUserCreate(data: User_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
