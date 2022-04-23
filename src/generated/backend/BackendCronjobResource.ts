/**
 * BackendCronjobResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Cronjob_Collection} from "./Cronjob_Collection";
import {Cronjob_Create} from "./Cronjob_Create";
import {Message} from "./Message";

export default class BackendCronjobResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/cronjob";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {AxiosPromise<Cronjob_Collection>}
     */
    public backendActionCronjobGetAll(query?: Collection_Category_Query): AxiosPromise<Cronjob_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Cronjob_Collection>(this.url, params);
    }

    /**
     * @param {Cronjob_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCronjobCreate(data?: Cronjob_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
