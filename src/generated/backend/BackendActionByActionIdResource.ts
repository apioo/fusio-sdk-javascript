/**
 * BackendActionByActionIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action} from "./Action";
import {Action_Update} from "./Action_Update";
import {Message} from "./Message";

export default class BackendActionByActionIdResource extends ResourceAbstract {
    private url: string;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/"+action_id+"";
    }

    /**
     * @returns {AxiosPromise<Action>}
     */
    public backendActionActionGet(): AxiosPromise<Action> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Action>(this.url, params);
    }

    /**
     * @param {Action_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionActionUpdate(data?: Action_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionActionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
