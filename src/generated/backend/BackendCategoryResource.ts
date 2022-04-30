/**
 * BackendCategoryResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Category_Collection} from "./Category_Collection";
import {Category_Create} from "./Category_Create";
import {Message} from "./Message";

export default class BackendCategoryResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/category";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Category_Collection>}
     */
    public backendActionCategoryGetAll(query?: Collection_Query): AxiosPromise<Category_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Category_Collection>(this.url, params);
    }

    /**
     * @param {Category_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryCreate(data?: Category_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
