/**
 * BackendPlanByPlanIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Plan} from "./Plan";
import {Plan_Update} from "./Plan_Update";
import {Message} from "./Message";

export default class BackendPlanByPlanIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.plan_id = plan_id;

        this.url = baseUrl + "/backend/plan/"+plan_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Plan>}
     */
    public backendActionPlanGet(): AxiosPromise<Plan> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

    /**
     * @param {Plan_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanUpdate(data?: Plan_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
