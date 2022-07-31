/**
 * BackendConnectionByConnectionIdIntrospectionAndEntityResource generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdIntrospectionAndEntityResource extends ResourceAbstract {
    private url: string;

    private connection_id: string;
    private entity: string;

    public constructor(connection_id: string, entity: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connection_id = connection_id;
        this.entity = entity;

        this.url = baseUrl + "/backend/connection/"+connection_id+"/introspection/"+entity+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionIntrospectionGetDetails(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Message>(this.url, params);
    }

}
