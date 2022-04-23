/**
 * ConsumerAppResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {App_Collection} from "./App_Collection";
import {App_Create} from "./App_Create";
import {Message} from "./Message";

export default class ConsumerAppResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/app";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<App_Collection>}
     */
    public consumerActionAppGetAll(query?: Collection_Query): AxiosPromise<App_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<App_Collection>(this.url, params);
    }

    /**
     * @param {App_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionAppCreate(data?: App_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
