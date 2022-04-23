/**
 * BackendActionExecuteByActionIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action_Execute_Request} from "./Action_Execute_Request";
import {Action_Execute_Response} from "./Action_Execute_Response";

export default class BackendActionExecuteByActionIdResource extends ResourceAbstract {
    private url: string;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/execute/"+action_id+"";
    }

    /**
     * @param {Action_Execute_Request} data
     * @returns {AxiosPromise<Action_Execute_Response>}
     */
    public backendActionActionExecute(data?: Action_Execute_Request): AxiosPromise<Action_Execute_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Action_Execute_Response>(this.url, data, params);
    }

}
