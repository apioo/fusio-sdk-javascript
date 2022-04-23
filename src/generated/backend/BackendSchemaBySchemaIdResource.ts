/**
 * BackendSchemaBySchemaIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Schema} from "./Schema";
import {Schema_Update} from "./Schema_Update";
import {Message} from "./Message";

export default class BackendSchemaBySchemaIdResource extends ResourceAbstract {
    private url: string;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/"+schema_id+"";
    }

    /**
     * @returns {AxiosPromise<Schema>}
     */
    public backendActionSchemaGet(): AxiosPromise<Schema> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Schema>(this.url, params);
    }

    /**
     * @param {Schema_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaUpdate(data?: Schema_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
