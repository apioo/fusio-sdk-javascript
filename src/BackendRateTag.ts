/**
 * BackendRateTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendRate} from "./BackendRate";
import {BackendRateCollection} from "./BackendRateCollection";
import {BackendRateCreate} from "./BackendRateCreate";
import {BackendRateUpdate} from "./BackendRateUpdate";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendRateTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async delete(rateId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/rate/$rate_id<[0-9]+|^~>', {
            'rate_id': rateId,
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
    public async update(rateId: string, payload: BackendRateUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/rate/$rate_id<[0-9]+|^~>', {
            'rate_id': rateId,
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
     * @returns {Promise<BackendRate>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async get(rateId: string): Promise<BackendRate> {
        const url = this.parser.url('/backend/rate/$rate_id<[0-9]+|^~>', {
            'rate_id': rateId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendRate>(params);
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
    public async create(payload: BackendRateCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/rate', {
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
     * @returns {Promise<BackendRateCollection>}
     * @throws {CommonMessageExceptionException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendRateCollection> {
        const url = this.parser.url('/backend/rate', {
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
            const response = await this.httpClient.request<BackendRateCollection>(params);
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
