/**
 * BackendPlanResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Collection} from "./Plan_Collection";
import {Plan_Create} from "./Plan_Create";
import {Message} from "./Message";

export default class BackendPlanResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Collection>}
     */
    public backendActionPlanGetAll(query?: Collection_Query): AxiosPromise<Plan_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanCreate(data?: Plan_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
