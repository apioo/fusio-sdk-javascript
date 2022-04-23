/**
 * BackendPlanByPlanIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Plan} from "./Plan";
import {Plan_Update} from "./Plan_Update";
import {Message} from "./Message";

export default class BackendPlanByPlanIdResource extends ResourceAbstract {
    private url: string;

    private plan_id: string;

    public constructor(plan_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.plan_id = plan_id;

        this.url = baseUrl + "/backend/plan/"+plan_id+"";
    }

    /**
     * @returns {AxiosPromise<Plan>}
     */
    public backendActionPlanGet(): AxiosPromise<Plan> {
        let params = {
            method: <Method> "GET",
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
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPlanDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
