/**
 * BackendSchemaBySchemaIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Schema} from "./Schema";
import {Schema_Update} from "./Schema_Update";
import {Message} from "./Message";

export default class BackendSchemaBySchemaIdResource extends ResourceAbstract {
    private url: string;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/"+schema_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Schema>>}
     */
    public async backendActionSchemaGet(): Promise<AxiosResponse<Schema>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Schema>(this.url, params);
    }

    /**
     * @param {Schema_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionSchemaUpdate(data: Schema_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionSchemaDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
