/**
 * BackendConfigByConfigIdResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Config} from "./Config";
import {Config_Update} from "./Config_Update";
import {Message} from "./Message";

export default class BackendConfigByConfigIdResource extends ResourceAbstract {
    private url: string;

    private config_id: string;

    public constructor(config_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.config_id = config_id;

        this.url = baseUrl + "/backend/config/"+config_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Config>>}
     */
    public async backendActionConfigGet(): Promise<AxiosResponse<Config>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Config>(this.url, params);
    }

    /**
     * @param {Config_Update} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConfigUpdate(data: Config_Update): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
