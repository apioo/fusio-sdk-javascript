/**
 * BackendActionByActionIdResource generated on 2022-07-09
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action} from "./Action";
import {Action_Update} from "./Action_Update";
import {Message} from "./Message";

export default class BackendActionByActionIdResource extends ResourceAbstract {
    private url: string;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/"+action_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Action>>}
     */
    public async backendActionActionGet(): Promise<AxiosResponse<Action>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Action>(this.url, params);
    }

    /**
     * @param {Action_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionActionUpdate(data: Action_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionActionDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
