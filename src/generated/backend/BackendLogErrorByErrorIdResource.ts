/**
 * BackendLogErrorByErrorIdResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Log_Error} from "./Log_Error";

export default class BackendLogErrorByErrorIdResource extends ResourceAbstract {
    private url: string;

    private error_id: string;

    public constructor(error_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.error_id = error_id;

        this.url = baseUrl + "/backend/log/error/"+error_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Log_Error>>}
     */
    public async backendActionLogErrorGet(): Promise<AxiosResponse<Log_Error>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Log_Error>(this.url, params);
    }

}
