/**
 * ConsumerLogResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Log_Collection} from "./Log_Collection";

export default class ConsumerLogResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/log";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Log_Collection>}
     */
    public consumerActionLogGetAll(query?: Collection_Query): AxiosPromise<Log_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}
