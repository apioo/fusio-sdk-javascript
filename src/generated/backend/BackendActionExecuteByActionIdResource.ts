/**
 * BackendActionExecuteByActionIdResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action_Execute_Request} from "./Action_Execute_Request";
import {Action_Execute_Response} from "./Action_Execute_Response";

export default class BackendActionExecuteByActionIdResource extends ResourceAbstract {
    private url: string;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/execute/"+action_id+"";
    }

    /**
     * @param {Action_Execute_Request} data
     * @returns {Promise<AxiosResponse<Action_Execute_Response>>}
     */
    public async backendActionActionExecute(data: Action_Execute_Request): Promise<AxiosResponse<Action_Execute_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Action_Execute_Response>(this.url, data, params);
    }

}
