/**
 * BackendCronjobByCronjobIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Cronjob} from "./Cronjob";
import {Cronjob_Update} from "./Cronjob_Update";
import {Message} from "./Message";

export default class BackendCronjobByCronjobIdResource extends ResourceAbstract {
    private url: string;

    private cronjob_id: string;

    public constructor(cronjob_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.cronjob_id = cronjob_id;

        this.url = baseUrl + "/backend/cronjob/"+cronjob_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Cronjob>>}
     */
    public async backendActionCronjobGet(): Promise<AxiosResponse<Cronjob>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Cronjob>(this.url, params);
    }

    /**
     * @param {Cronjob_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCronjobUpdate(data: Cronjob_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionCronjobDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
