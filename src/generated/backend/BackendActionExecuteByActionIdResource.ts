/**
 * BackendActionExecuteByActionIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {ActionExecuteRequest} from "./ActionExecuteRequest";
import {ActionExecuteResponse} from "./ActionExecuteResponse";

export default class BackendActionExecuteByActionIdResource extends ResourceAbstract {
    private url: string;

    private actionId: string;

    public constructor(actionId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.actionId = actionId;

        this.url = baseUrl + "/backend/action/execute/"+actionId+"";
    }

    /**
     * @param {ActionExecuteRequest} data
     * @returns {Promise<AxiosResponse<ActionExecuteResponse>>}
     */
    public async backendActionActionExecute(data: ActionExecuteRequest): Promise<AxiosResponse<ActionExecuteResponse>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<ActionExecuteResponse>(this.url, data, params);
    }

}
