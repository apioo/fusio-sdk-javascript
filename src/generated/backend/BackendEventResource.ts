/**
 * BackendEventResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Event_Collection} from "./Event_Collection";
import {Event_Create} from "./Event_Create";
import {Message} from "./Message";

export default class BackendEventResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/event";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Event_Collection>}
     */
    public backendActionEventGetAll(query?: Collection_Category_Query): AxiosPromise<Event_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

    /**
     * @param {Event_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventCreate(data?: Event_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
