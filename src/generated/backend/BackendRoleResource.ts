/**
 * BackendRoleResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Role_Collection} from "./Role_Collection";
import {Role_Create} from "./Role_Create";
import {Message} from "./Message";

export default class BackendRoleResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/role";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Role_Collection>}
     */
    public backendActionRoleGetAll(query?: Collection_Query): AxiosPromise<Role_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Role_Collection>(this.url, params);
    }

    /**
     * @param {Role_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRoleCreate(data?: Role_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
