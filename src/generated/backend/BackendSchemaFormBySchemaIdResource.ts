/**
 * BackendSchemaFormBySchemaIdResource generated on 2022-07-09
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Schema_Form} from "./Schema_Form";
import {Message} from "./Message";

export default class BackendSchemaFormBySchemaIdResource extends ResourceAbstract {
    private url: string;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/form/"+schema_id+"";
    }

    /**
     * @param {Schema_Form} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionSchemaForm(data: Schema_Form): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
