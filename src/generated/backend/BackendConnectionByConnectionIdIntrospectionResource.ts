/**
 * BackendConnectionByConnectionIdIntrospectionResource generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdIntrospectionResource extends ResourceAbstract {
    private url: string;

    private connection_id: string;

    public constructor(connection_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connection_id = connection_id;

        this.url = baseUrl + "/backend/connection/"+connection_id+"/introspection";
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionIntrospectionGetEntities(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Message>(this.url, params);
    }

}
