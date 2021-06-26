/**
 * BackendActionExecuteByActionIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Action_Execute_Request} from "./Action_Execute_Request";
import {Action_Execute_Response} from "./Action_Execute_Response";

export default class BackendActionExecuteByActionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/execute/"+action_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Action_Execute_Request} data
     * @returns {AxiosPromise<Action_Execute_Response>}
     */
    public backendActionActionExecute(data?: Action_Execute_Request): AxiosPromise<Action_Execute_Response> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Action_Execute_Response>(this.url, data, params);
    }

}
