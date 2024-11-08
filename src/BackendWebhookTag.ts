/**
 * BackendWebhookTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendWebhook} from "./BackendWebhook";
import {BackendWebhookCollection} from "./BackendWebhookCollection";
import {BackendWebhookCreate} from "./BackendWebhookCreate";
import {BackendWebhookUpdate} from "./BackendWebhookUpdate";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendWebhookTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async delete(webhookId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/webhook/$webhook_id<[0-9]+|^~>', {
            'webhook_id': webhookId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            headers: {
            },
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
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async update(webhookId: string, payload: BackendWebhookUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/webhook/$webhook_id<[0-9]+|^~>', {
            'webhook_id': webhookId,
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
     * @returns {Promise<BackendWebhook>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(webhookId: string): Promise<BackendWebhook> {
        const url = this.parser.url('/backend/webhook/$webhook_id<[0-9]+|^~>', {
            'webhook_id': webhookId,
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
            const response = await this.httpClient.request<BackendWebhook>(params);
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
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async create(payload: BackendWebhookCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/webhook', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
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
     * @returns {Promise<BackendWebhookCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendWebhookCollection> {
        const url = this.parser.url('/backend/webhook', {
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
            const response = await this.httpClient.request<BackendWebhookCollection>(params);
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
