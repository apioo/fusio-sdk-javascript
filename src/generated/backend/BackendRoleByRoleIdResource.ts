/**
 * BackendRoleByRoleIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Role} from "./Role";
import {Role_Update} from "./Role_Update";
import {Message} from "./Message";

export default class BackendRoleByRoleIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private role_id: string;

    public constructor(role_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.role_id = role_id;

        this.url = baseUrl + "/backend/role/"+role_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Role>}
     */
    public backendActionRoleGet(): AxiosPromise<Role> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Role>(this.url, params);
    }

    /**
     * @param {Role_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRoleUpdate(data?: Role_Update): AxiosPromise<Message> {
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
    public backendActionRoleDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
