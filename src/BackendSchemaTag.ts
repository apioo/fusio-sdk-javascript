/**
 * BackendSchemaTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendSchema} from "./BackendSchema";
import {BackendSchemaCollection} from "./BackendSchemaCollection";
import {BackendSchemaCreate} from "./BackendSchemaCreate";
import {BackendSchemaForm} from "./BackendSchemaForm";
import {BackendSchemaPreviewResponse} from "./BackendSchemaPreviewResponse";
import {BackendSchemaUpdate} from "./BackendSchemaUpdate";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendSchemaTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async delete(schemaId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/schema/$schema_id<[0-9]+|^~>', {
            'schema_id': schemaId,
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
    public async update(schemaId: string, payload: BackendSchemaUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/schema/$schema_id<[0-9]+|^~>', {
            'schema_id': schemaId,
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
     * @returns {Promise<BackendSchema>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(schemaId: string): Promise<BackendSchema> {
        const url = this.parser.url('/backend/schema/$schema_id<[0-9]+|^~>', {
            'schema_id': schemaId,
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
            const response = await this.httpClient.request<BackendSchema>(params);
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
    public async updateForm(schemaId: string, payload: BackendSchemaForm): Promise<CommonMessage> {
        const url = this.parser.url('/backend/schema/form/$schema_id<[0-9]+>', {
            'schema_id': schemaId,
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
     * @returns {Promise<BackendSchemaPreviewResponse>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getPreview(schemaId: string): Promise<BackendSchemaPreviewResponse> {
        const url = this.parser.url('/backend/schema/preview/:schema_id', {
            'schema_id': schemaId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendSchemaPreviewResponse>(params);
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

    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async create(payload: BackendSchemaCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/schema', {
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
     * @returns {Promise<BackendSchemaCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendSchemaCollection> {
        const url = this.parser.url('/backend/schema', {
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
            const response = await this.httpClient.request<BackendSchemaCollection>(params);
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
