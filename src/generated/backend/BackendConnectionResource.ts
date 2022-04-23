/**
 * BackendConnectionResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Connection_Collection} from "./Connection_Collection";
import {Connection_Create} from "./Connection_Create";
import {Message} from "./Message";

export default class BackendConnectionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Connection_Collection>}
     */
    public backendActionConnectionGetAll(query?: Collection_Query): AxiosPromise<Connection_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Connection_Collection>(this.url, params);
    }

    /**
     * @param {Connection_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConnectionCreate(data?: Connection_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
