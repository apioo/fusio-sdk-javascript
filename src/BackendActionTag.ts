/**
 * BackendActionTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendAction} from "./BackendAction";
import {BackendActionCollection} from "./BackendActionCollection";
import {BackendActionCreate} from "./BackendActionCreate";
import {BackendActionExecuteRequest} from "./BackendActionExecuteRequest";
import {BackendActionExecuteResponse} from "./BackendActionExecuteResponse";
import {BackendActionIndex} from "./BackendActionIndex";
import {BackendActionUpdate} from "./BackendActionUpdate";
import {CommonFormContainer} from "./CommonFormContainer";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendActionTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async create(payload: BackendActionCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action', {
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

                if (statusCode >= 0 && statusCode <= 999) {
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
    public async delete(actionId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
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

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendActionExecuteResponse>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async execute(actionId: string, payload: BackendActionExecuteRequest): Promise<BackendActionExecuteResponse> {
        const url = this.parser.url('/backend/action/execute/:action_id', {
            'action_id': actionId,
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
            const response = await this.httpClient.request<BackendActionExecuteResponse>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendAction>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(actionId: string): Promise<BackendAction> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
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
            const response = await this.httpClient.request<BackendAction>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendActionCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendActionCollection> {
        const url = this.parser.url('/backend/action', {
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
            const response = await this.httpClient.request<BackendActionCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendActionIndex>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getClasses(): Promise<BackendActionIndex> {
        const url = this.parser.url('/backend/action/list', {
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
            const response = await this.httpClient.request<BackendActionIndex>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<CommonFormContainer>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getForm(_class?: string): Promise<CommonFormContainer> {
        const url = this.parser.url('/backend/action/form', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'class': _class,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<CommonFormContainer>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
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
    public async update(actionId: string, payload: BackendActionUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
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

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
