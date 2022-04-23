/**
 * BackendConfigByConfigIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Config} from "./Config";
import {Config_Update} from "./Config_Update";
import {Message} from "./Message";

export default class BackendConfigByConfigIdResource extends ResourceAbstract {
    private url: string;

    private config_id: string;

    public constructor(config_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.config_id = config_id;

        this.url = baseUrl + "/backend/config/"+config_id+"";
    }

    /**
     * @returns {AxiosPromise<Config>}
     */
    public backendActionConfigGet(): AxiosPromise<Config> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Config>(this.url, params);
    }

    /**
     * @param {Config_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConfigUpdate(data?: Config_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
