/**
 * AppTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {App} from "./App";
import {AppCollection} from "./AppCollection";
import {AppCreate} from "./AppCreate";
import {AppToken} from "./AppToken";
import {AppTokenCollection} from "./AppTokenCollection";
import {AppUpdate} from "./AppUpdate";
import {Message} from "./Message";
import {MessageException} from "./MessageException";

export class AppTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async deleteToken(appId: string, tokenId: string): Promise<Message> {
        const url = this.parser.url('/backend/app/$app_id<[0-9]+>/token/:token_id', {
            'app_id': appId,
            'token_id': tokenId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 410:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(appId: string): Promise<Message> {
        const url = this.parser.url('/backend/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 410:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async update(appId: string, payload: AppUpdate): Promise<Message> {
        const url = this.parser.url('/backend/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
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
                    case 400:
                        throw new MessageException(error.response.data);
                    case 401:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 410:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<App>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(appId: string): Promise<App> {
        const url = this.parser.url('/backend/app/$app_id<[0-9]+>', {
            'app_id': appId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<App>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 404:
                        throw new MessageException(error.response.data);
                    case 401:
                        throw new MessageException(error.response.data);
                    case 410:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async create(payload: AppCreate): Promise<Message> {
        const url = this.parser.url('/backend/app', {
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
                    case 400:
                        throw new MessageException(error.response.data);
                    case 401:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<AppCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<AppCollection> {
        const url = this.parser.url('/backend/app', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }),
        };

        try {
            const response = await this.httpClient.request<AppCollection>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<AppToken>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getToken(tokenId: string): Promise<AppToken> {
        const url = this.parser.url('/backend/app/token/$token_id<[0-9]+>', {
            'token_id': tokenId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<AppToken>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MessageException(error.response.data);
                    case 404:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<AppTokenCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAllTokens(startIndex?: number, count?: number, search?: string, from?: string, to?: string, appId?: number, userId?: number, status?: number, scope?: string, ip?: string): Promise<AppTokenCollection> {
        const url = this.parser.url('/backend/app/token', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
                'from': from,
                'to': to,
                'appId': appId,
                'userId': userId,
                'status': status,
                'scope': scope,
                'ip': ip,
            }),
        };

        try {
            const response = await this.httpClient.request<AppTokenCollection>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MessageException(error.response.data);
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }


}
