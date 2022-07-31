/**
 * BackendGeneratorByProviderResource generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Form_Container} from "./Form_Container";
import {Generator_Provider} from "./Generator_Provider";
import {Message} from "./Message";
import {Generator_Provider_Config} from "./Generator_Provider_Config";
import {Generator_Provider_Changelog} from "./Generator_Provider_Changelog";

export default class BackendGeneratorByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/backend/generator/"+provider+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Form_Container>>}
     */
    public async backendActionGeneratorForm(): Promise<AxiosResponse<Form_Container>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

    /**
     * @param {Generator_Provider} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionGeneratorCreate(data: Generator_Provider): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {Generator_Provider_Config} data
     * @returns {Promise<AxiosResponse<Generator_Provider_Changelog>>}
     */
    public async backendActionGeneratorChangelog(data: Generator_Provider_Config): Promise<AxiosResponse<Generator_Provider_Changelog>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<Generator_Provider_Changelog>(this.url, data, params);
    }

}
