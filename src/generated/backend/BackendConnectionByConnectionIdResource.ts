/**
 * BackendConnectionByConnectionIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Connection} from "./Connection";
import {Connection_Update} from "./Connection_Update";
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdResource extends ResourceAbstract {
    private url: string;

    private connection_id: string;

    public constructor(connection_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connection_id = connection_id;

        this.url = baseUrl + "/backend/connection/"+connection_id+"";
    }

    /**
     * @returns {AxiosPromise<Connection>}
     */
    public backendActionConnectionGet(): AxiosPromise<Connection> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Connection>(this.url, params);
    }

    /**
     * @param {Connection_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConnectionUpdate(data?: Connection_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConnectionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
