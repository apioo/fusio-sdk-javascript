/**
 * ConsumerPageResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Page_Collection} from "./Page_Collection";

export default class ConsumerPageResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/page";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Page_Collection>}
     */
    public consumerActionPageGetAll(query?: Collection_Query): AxiosPromise<Page_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Page_Collection>(this.url, params);
    }

}
