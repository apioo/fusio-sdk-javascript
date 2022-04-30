/**
 * BackendActionResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Action_Collection} from "./Action_Collection";
import {Action_Create} from "./Action_Create";
import {Message} from "./Message";

export default class BackendActionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/action";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Action_Collection>}
     */
    public backendActionActionGetAll(query?: Collection_Category_Query): AxiosPromise<Action_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Action_Collection>(this.url, params);
    }

    /**
     * @param {Action_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionActionCreate(data?: Action_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
