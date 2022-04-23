/**
 * ConsumerGrantResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Grant_Collection} from "./Grant_Collection";

export default class ConsumerGrantResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/grant";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Grant_Collection>}
     */
    public consumerActionGrantGetAll(query?: Collection_Query): AxiosPromise<Grant_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Grant_Collection>(this.url, params);
    }

}
