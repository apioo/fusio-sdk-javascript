/**
 * BackendEventByEventIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Event} from "./Event";
import {Event_Update} from "./Event_Update";
import {Message} from "./Message";

export default class BackendEventByEventIdResource extends ResourceAbstract {
    private url: string;

    private event_id: string;

    public constructor(event_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.event_id = event_id;

        this.url = baseUrl + "/backend/event/"+event_id+"";
    }

    /**
     * @returns {AxiosPromise<Event>}
     */
    public backendActionEventGet(): AxiosPromise<Event> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Event>(this.url, params);
    }

    /**
     * @param {Event_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventUpdate(data?: Event_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionEventDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
