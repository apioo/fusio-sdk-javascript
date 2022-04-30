/**
 * BackendRoleByRoleIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Role} from "./Role";
import {Role_Update} from "./Role_Update";
import {Message} from "./Message";

export default class BackendRoleByRoleIdResource extends ResourceAbstract {
    private url: string;

    private role_id: string;

    public constructor(role_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.role_id = role_id;

        this.url = baseUrl + "/backend/role/"+role_id+"";
    }

    /**
     * @returns {AxiosPromise<Role>}
     */
    public backendActionRoleGet(): AxiosPromise<Role> {
        let params = {
            method: <Method> "GET",
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
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRoleDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
