/**
 * ScopeTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Scope} from "./Scope";
import {ScopeCategories} from "./ScopeCategories";
import {ScopeCollection} from "./ScopeCollection";
import {ScopeCreate} from "./ScopeCreate";
import {ScopeUpdate} from "./ScopeUpdate";

export class ScopeTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(scopeId: string): Promise<Message> {
        const url = this.parser.url('/backend/scope/$scope_id<[0-9]+|^~>', {
            'scope_id': scopeId,
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
    public async update(scopeId: string, payload: ScopeUpdate): Promise<Message> {
        const url = this.parser.url('/backend/scope/$scope_id<[0-9]+|^~>', {
            'scope_id': scopeId,
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
     * @returns {Promise<Scope>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(scopeId: string): Promise<Scope> {
        const url = this.parser.url('/backend/scope/$scope_id<[0-9]+|^~>', {
            'scope_id': scopeId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Scope>(params);
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
     * @returns {Promise<ScopeCategories>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getCategories(): Promise<ScopeCategories> {
        const url = this.parser.url('/backend/scope/categories', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<ScopeCategories>(params);
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
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async create(payload: ScopeCreate): Promise<Message> {
        const url = this.parser.url('/backend/scope', {
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
     * @returns {Promise<ScopeCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ScopeCollection> {
        const url = this.parser.url('/backend/scope', {
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
            const response = await this.httpClient.request<ScopeCollection>(params);
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
