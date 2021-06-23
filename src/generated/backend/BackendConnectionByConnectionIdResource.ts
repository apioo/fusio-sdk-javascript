/**
 * BackendConnectionByConnectionIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Connection} from "./Connection";
import {Connection_Update} from "./Connection_Update";
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private connection_id: string;

    public constructor(connection_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.connection_id = connection_id;

        this.url = baseUrl + "/backend/connection/"+connection_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Connection>}
     */
    public backendActionConnectionGet(): AxiosPromise<Connection> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
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
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConnectionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
