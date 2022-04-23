/**
 * BackendPlanContractResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Plan_Contract_Collection} from "./Plan_Contract_Collection";
import {Plan_Contract_Create} from "./Plan_Contract_Create";
import {Message} from "./Message";

export default class BackendPlanContractResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/plan/contract";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Plan_Contract_Collection>}
     */
    public backendActionPlanContractGetAll(query?: Collection_Query): AxiosPromise<Plan_Contract_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    /**
     * @param {Plan_Contract_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanContractCreate(data?: Plan_Contract_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
