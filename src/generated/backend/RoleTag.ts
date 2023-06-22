/**
 * RoleTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Role} from "./Role";
import {RoleCollection} from "./RoleCollection";
import {RoleCreate} from "./RoleCreate";
import {RoleUpdate} from "./RoleUpdate";

export class RoleTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(roleId: string): Promise<Message> {
        const url = this.parser.url('/backend/role/$role_id<[0-9]+|^~>', {
            'role_id': roleId,
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
    public async update(roleId: string, payload: RoleUpdate): Promise<Message> {
        const url = this.parser.url('/backend/role/$role_id<[0-9]+|^~>', {
            'role_id': roleId,
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
     * @returns {Promise<Role>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(roleId: string): Promise<Role> {
        const url = this.parser.url('/backend/role/$role_id<[0-9]+|^~>', {
            'role_id': roleId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Role>(params);
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
    public async create(payload: RoleCreate): Promise<Message> {
        const url = this.parser.url('/backend/role', {
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
     * @returns {Promise<RoleCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<RoleCollection> {
        const url = this.parser.url('/backend/role', {
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
            const response = await this.httpClient.request<RoleCollection>(params);
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