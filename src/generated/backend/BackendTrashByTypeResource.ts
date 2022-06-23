/**
 * BackendTrashByTypeResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Trash_Data_Collection} from "./Trash_Data_Collection";
import {Message} from "./Message";

export default class BackendTrashByTypeResource extends ResourceAbstract {
    private url: string;

    private type: string;

    public constructor(type: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.type = type;

        this.url = baseUrl + "/backend/trash/"+type+"";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Trash_Data_Collection>>}
     */
    public async backendActionTrashGetAll(query?: Collection_Query): Promise<AxiosResponse<Trash_Data_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Trash_Data_Collection>(this.url, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionTrashRestore(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, null, params);
    }

}
