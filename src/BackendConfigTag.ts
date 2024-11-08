/**
 * BackendConfigTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendConfig} from "./BackendConfig";
import {BackendConfigCollection} from "./BackendConfigCollection";
import {BackendConfigUpdate} from "./BackendConfigUpdate";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendConfigTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async update(configId: string, payload: BackendConfigUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/config/$config_id<[0-9]+|^~>', {
            'config_id': configId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<CommonMessage>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode === 400) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 401) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 404) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 410) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 500) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendConfig>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(configId: string): Promise<BackendConfig> {
        const url = this.parser.url('/backend/config/$config_id<[0-9]+|^~>', {
            'config_id': configId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendConfig>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode === 401) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 404) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 410) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 500) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendConfigCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendConfigCollection> {
        const url = this.parser.url('/backend/config', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendConfigCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode === 401) {
                    throw new CommonMessageException(error.response.data);
                }

                if (statusCode === 500) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
