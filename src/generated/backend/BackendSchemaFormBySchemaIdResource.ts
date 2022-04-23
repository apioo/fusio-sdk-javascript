/**
 * BackendSchemaFormBySchemaIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Schema_Form} from "./Schema_Form";
import {Message} from "./Message";

export default class BackendSchemaFormBySchemaIdResource extends ResourceAbstract {
    private url: string;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/form/"+schema_id+"";
    }

    /**
     * @param {Schema_Form} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaForm(data?: Schema_Form): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
