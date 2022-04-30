/**
 * BackendUserResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {User_Collection} from "./User_Collection";
import {User_Create} from "./User_Create";
import {Message} from "./Message";

export default class BackendUserResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/user";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<User_Collection>}
     */
    public backendActionUserGetAll(query?: Collection_Query): AxiosPromise<User_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<User_Collection>(this.url, params);
    }

    /**
     * @param {User_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionUserCreate(data?: User_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
