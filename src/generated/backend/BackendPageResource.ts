/**
 * BackendPageResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Page_Collection} from "./Page_Collection";
import {Page_Create} from "./Page_Create";
import {Message} from "./Message";

export default class BackendPageResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/page";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Page_Collection>}
     */
    public backendActionPageGetAll(query?: Collection_Query): AxiosPromise<Page_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Page_Collection>(this.url, params);
    }

    /**
     * @param {Page_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPageCreate(data?: Page_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
