/**
 * BackendGeneratorTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {FormContainer} from "./FormContainer";
import {GeneratorIndexProviders} from "./GeneratorIndexProviders";
import {GeneratorProvider} from "./GeneratorProvider";
import {GeneratorProviderChangelog} from "./GeneratorProviderChangelog";
import {GeneratorProviderConfig} from "./GeneratorProviderConfig";
import {Message} from "./Message";

export default class BackendGeneratorTag extends TagAbstract {
    /**
     * @returns {Promise<GeneratorProviderChangelog>}
     * @throws {ClientException}
     */
    public async getChangelog(provider: string, payload: GeneratorProviderConfig): Promise<GeneratorProviderChangelog> {
        const url = this.parser.url('/backend/generator/:provider', {
            'provider': provider,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<GeneratorProviderChangelog>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async executeProvider(provider: string, payload: GeneratorProvider): Promise<Message> {
        const url = this.parser.url('/backend/generator/:provider', {
            'provider': provider,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<FormContainer>}
     * @throws {ClientException}
     */
    public async getProviderForm(provider: string): Promise<FormContainer> {
        const url = this.parser.url('/backend/generator/:provider', {
            'provider': provider,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<FormContainer>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<GeneratorIndexProviders>}
     * @throws {ClientException}
     */
    public async getProviders(): Promise<GeneratorIndexProviders> {
        const url = this.parser.url('/backend/generator', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<GeneratorIndexProviders>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }


}