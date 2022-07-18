/**
 * BackendConnectionByConnectionIdResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Connection} from "./Connection";
import {Connection_Update} from "./Connection_Update";
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdResource extends ResourceAbstract {
    private url: string;

    private connection_id: string;

    public constructor(connection_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connection_id = connection_id;

        this.url = baseUrl + "/backend/connection/"+connection_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Connection>>}
     */
    public async backendActionConnectionGet(): Promise<AxiosResponse<Connection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Connection>(this.url, params);
    }

    /**
     * @param {Connection_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionUpdate(data: Connection_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
