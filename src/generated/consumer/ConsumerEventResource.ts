/**
 * ConsumerEventResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Event_Collection} from "./Event_Collection";

export default class ConsumerEventResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/event";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Event_Collection>}
     */
    public consumerActionEventGetAll(query?: Collection_Query): AxiosPromise<Event_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Event_Collection>(this.url, params);
    }

}
