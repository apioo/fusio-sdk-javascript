/**
 * BackendSchemaPreviewBySchemaIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Schema_Preview_Response} from "./Schema_Preview_Response";

export default class BackendSchemaPreviewBySchemaIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/preview/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Schema_Preview_Response>}
     */
    public backendActionSchemaGetPreview(): AxiosPromise<Schema_Preview_Response> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Schema_Preview_Response>(this.url, null, params);
    }

}
