/**
 * BackendEventByEventIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Event} from "./Event";
import {EventUpdate} from "./EventUpdate";
import {Message} from "./Message";

export default class BackendEventByEventIdResource extends ResourceAbstract {
    private url: string;

    private eventId: string;

    public constructor(eventId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.eventId = eventId;

        this.url = baseUrl + "/backend/event/"+eventId+"";
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
     * @param {EventUpdate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionEventUpdate(data: EventUpdate): Promise<AxiosResponse<Message>> {
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
