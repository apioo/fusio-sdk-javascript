/**
 * BackendActionByActionIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Action} from "./Action";
import {Action_Update} from "./Action_Update";
import {Message} from "./Message";

export default class BackendActionByActionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private action_id: string;

    public constructor(action_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/"+action_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Action>}
     */
    public backendActionActionGet(): AxiosPromise<Action> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
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
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionActionDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
