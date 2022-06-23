/**
 * BackendCronjobResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Cronjob_Collection} from "./Cronjob_Collection";
import {Cronjob_Create} from "./Cronjob_Create";
import {Message} from "./Message";

export default class BackendCronjobResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/cronjob";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Cronjob_Collection>>}
     */
    public async backendActionCronjobGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Cronjob_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Cronjob_Collection>(this.url, params);
    }

    /**
     * @param {Cronjob_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCronjobCreate(data: Cronjob_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
