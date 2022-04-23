/**
 * BackendSchemaResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Schema_Collection} from "./Schema_Collection";
import {Schema_Create} from "./Schema_Create";
import {Message} from "./Message";

export default class BackendSchemaResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/schema";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Schema_Collection>}
     */
    public backendActionSchemaGetAll(query?: Collection_Category_Query): AxiosPromise<Schema_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Schema_Collection>(this.url, params);
    }

    /**
     * @param {Schema_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSchemaCreate(data?: Schema_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
