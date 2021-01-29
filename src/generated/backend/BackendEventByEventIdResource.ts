/**
 * BackendEventByEventIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Event} from "./Event";
import {Event_Update} from "./Event_Update";
import {Message} from "./Message";

export default class BackendEventByEventIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private event_id: string;

    public constructor(event_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.event_id = event_id;

        this.url = baseUrl + "/backend/event/"+event_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Event>}
     */
    public backendActionEventGet(): AxiosPromise<Event> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Event>(this.url, params);
    }

    /**
     * @param {Event_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventUpdate(data?: Event_Update): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventDelete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
