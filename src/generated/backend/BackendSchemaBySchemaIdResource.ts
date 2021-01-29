/**
 * BackendSchemaBySchemaIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Schema} from "./Schema";
import {Schema_Update} from "./Schema_Update";
import {Message} from "./Message";

export default class BackendSchemaBySchemaIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Schema>}
     */
    public backendActionSchemaGet(): AxiosPromise<Schema> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Schema>(this.url, params);
    }

    /**
     * @param {Schema_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaUpdate(data?: Schema_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaDelete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
