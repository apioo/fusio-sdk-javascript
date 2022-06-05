/**
 * BackendRateByRateIdResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Rate} from "./Rate";
import {Rate_Update} from "./Rate_Update";
import {Message} from "./Message";

export default class BackendRateByRateIdResource extends ResourceAbstract {
    private url: string;

    private rate_id: string;

    public constructor(rate_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.rate_id = rate_id;

        this.url = baseUrl + "/backend/rate/"+rate_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Rate>>}
     */
    public async backendActionRateGet(): Promise<AxiosResponse<Rate>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Rate>(this.url, params);
    }

    /**
     * @param {Rate_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRateUpdate(data: Rate_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRateDelete(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
