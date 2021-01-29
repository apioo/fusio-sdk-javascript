/**
 * BackendSchemaFormBySchemaIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Schema_Form} from "./Schema_Form";
import {Message} from "./Message";

export default class BackendSchemaFormBySchemaIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/form/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Schema_Form} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaForm(data?: Schema_Form): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
