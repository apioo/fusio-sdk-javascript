/**
 * BackendOperationTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendOperation} from "./BackendOperation";
import {BackendOperationCollection} from "./BackendOperationCollection";
import {BackendOperationCreate} from "./BackendOperationCreate";
import {BackendOperationUpdate} from "./BackendOperationUpdate";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendOperationTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async delete(operationId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/operation/$operation_id<[0-9]+|^~>', {
            'operation_id': operationId,
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
    public async update(operationId: string, payload: BackendOperationUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/operation/$operation_id<[0-9]+|^~>', {
            'operation_id': operationId,
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
     * @returns {Promise<BackendOperation>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async get(operationId: string): Promise<BackendOperation> {
        const url = this.parser.url('/backend/operation/$operation_id<[0-9]+|^~>', {
            'operation_id': operationId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendOperation>(params);
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
    public async create(payload: BackendOperationCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/operation', {
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
     * @returns {Promise<BackendOperationCollection>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendOperationCollection> {
        const url = this.parser.url('/backend/operation', {
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
            const response = await this.httpClient.request<BackendOperationCollection>(params);
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
