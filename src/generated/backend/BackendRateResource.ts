/**
 * BackendRateResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Rate_Collection} from "./Rate_Collection";
import {Rate_Create} from "./Rate_Create";
import {Message} from "./Message";

export default class BackendRateResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/rate";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Rate_Collection>}
     */
    public backendActionRateGetAll(query?: Collection_Query): AxiosPromise<Rate_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Rate_Collection>(this.url, params);
    }

    /**
     * @param {Rate_Create} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateCreate(data?: Rate_Create): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
