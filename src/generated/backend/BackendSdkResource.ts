/**
 * BackendSdkResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Sdk_Response} from "./Sdk_Response";
import {Sdk_Generate} from "./Sdk_Generate";
import {Message} from "./Message";

export default class BackendSdkResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/sdk";
    }

    /**
     * @returns {Promise<AxiosResponse<Sdk_Response>>}
     */
    public async backendActionSdkGetAll(): Promise<AxiosResponse<Sdk_Response>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Sdk_Response>(this.url, params);
    }

    /**
     * @param {Sdk_Generate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionSdkGenerate(data: Sdk_Generate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
