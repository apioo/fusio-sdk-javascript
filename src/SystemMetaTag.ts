/**
 * SystemMetaTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {Passthru} from "./Passthru";
import {SystemAbout} from "./SystemAbout";
import {SystemHealthCheck} from "./SystemHealthCheck";
import {SystemRoute} from "./SystemRoute";
import {SystemSchema} from "./SystemSchema";

export class SystemMetaTag extends TagAbstract {
    /**
     * @returns {Promise<SystemSchema>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getSchema(name: string): Promise<SystemSchema> {
        const url = this.parser.url('/system/schema/:name', {
            'name': name,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<SystemSchema>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
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
     * @returns {Promise<SystemRoute>}
     * @throws {ClientException}
     */
    public async getRoutes(): Promise<SystemRoute> {
        const url = this.parser.url('/system/route', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<SystemRoute>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<SystemHealthCheck>}
     * @throws {ClientException}
     */
    public async getHealth(): Promise<SystemHealthCheck> {
        const url = this.parser.url('/system/health', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<SystemHealthCheck>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<Passthru>}
     * @throws {ClientException}
     */
    public async getDebug(payload: Passthru): Promise<Passthru> {
        const url = this.parser.url('/system/debug', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Passthru>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<SystemAbout>}
     * @throws {ClientException}
     */
    public async getAbout(): Promise<SystemAbout> {
        const url = this.parser.url('/system/about', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<SystemAbout>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
