/**
 * ConsumerAppTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerApp} from "./ConsumerApp";
import {ConsumerAppCollection} from "./ConsumerAppCollection";
import {ConsumerAppCreate} from "./ConsumerAppCreate";
import {ConsumerAppUpdate} from "./ConsumerAppUpdate";

export class ConsumerAppTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async delete(appId: string): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<CommonMessage>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 404:
                        throw new CommonMessageException(error.response.data);
                    case 410:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async update(appId: string, payload: ConsumerAppUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
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
                switch (error.response.status) {
                    case 400:
                        throw new CommonMessageException(error.response.data);
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 404:
                        throw new CommonMessageException(error.response.data);
                    case 410:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<ConsumerApp>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async get(appId: string): Promise<ConsumerApp> {
        const url = this.parser.url('/consumer/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<ConsumerApp>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 404:
                        throw new CommonMessageException(error.response.data);
                    case 410:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async create(payload: ConsumerAppCreate): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/app', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
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
                switch (error.response.status) {
                    case 400:
                        throw new CommonMessageException(error.response.data);
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<ConsumerAppCollection>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ConsumerAppCollection> {
        const url = this.parser.url('/consumer/app', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<ConsumerAppCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new CommonMessageException(error.response.data);
                    case 500:
                        throw new CommonMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
