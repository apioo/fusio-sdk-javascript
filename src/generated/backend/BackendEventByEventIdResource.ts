/**
 * BackendEventByEventIdResource generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Event} from "./Event";
import {Event_Update} from "./Event_Update";
import {Message} from "./Message";

export default class BackendEventByEventIdResource extends ResourceAbstract {
    private url: string;

    private event_id: string;

    public constructor(event_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.event_id = event_id;

        this.url = baseUrl + "/backend/event/"+event_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Event>>}
     */
    public async backendActionEventGet(): Promise<AxiosResponse<Event>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Event>(this.url, params);
    }

    /**
     * @param {Event_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionEventUpdate(data: Event_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionEventDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
