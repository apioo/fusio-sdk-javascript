/**
 * ConsumerPlanResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Collection} from "./Plan_Collection";

export default class ConsumerPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/plan";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Collection>}
     */
    public consumerActionPlanGetAll(query?: Collection_Query): AxiosPromise<Plan_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

}
