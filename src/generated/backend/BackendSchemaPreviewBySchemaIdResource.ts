/**
 * BackendSchemaPreviewBySchemaIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Schema_Preview_Response} from "./Schema_Preview_Response";

export default class BackendSchemaPreviewBySchemaIdResource extends ResourceAbstract {
    private url: string;

    private schema_id: string;

    public constructor(schema_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/preview/"+schema_id+"";
    }

    /**
     * @returns {AxiosPromise<Schema_Preview_Response>}
     */
    public backendActionSchemaGetPreview(): AxiosPromise<Schema_Preview_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Schema_Preview_Response>(this.url, null, params);
    }

}
