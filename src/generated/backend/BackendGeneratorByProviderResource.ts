/**
 * BackendGeneratorByProviderResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {FormContainer} from "./FormContainer";
import {GeneratorProvider} from "./GeneratorProvider";
import {Message} from "./Message";
import {GeneratorProviderConfig} from "./GeneratorProviderConfig";
import {GeneratorProviderChangelog} from "./GeneratorProviderChangelog";

export default class BackendGeneratorByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/backend/generator/"+provider+"";
    }

    /**
     * @returns {Promise<AxiosResponse<FormContainer>>}
     */
    public async backendActionGeneratorForm(): Promise<AxiosResponse<FormContainer>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<FormContainer>(this.url, params);
    }

    /**
     * @param {GeneratorProvider} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionGeneratorCreate(data: GeneratorProvider): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {GeneratorProviderConfig} data
     * @returns {Promise<AxiosResponse<GeneratorProviderChangelog>>}
     */
    public async backendActionGeneratorChangelog(data: GeneratorProviderConfig): Promise<AxiosResponse<GeneratorProviderChangelog>> {
        let params: AxiosRequestConfig = {
            method: 'PUT',
        };

        return this.httpClient.put<GeneratorProviderChangelog>(this.url, data, params);
    }

}
