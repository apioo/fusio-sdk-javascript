/**
 * ConsumerGrantTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerGrantCollection} from "./ConsumerGrantCollection";

export class ConsumerGrantTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async delete(grantId: string): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/grant/$grant_id<[0-9]+>', {
            'grant_id': grantId,
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
     * @returns {Promise<ConsumerGrantCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ConsumerGrantCollection> {
        const url = this.parser.url('/consumer/grant', {
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
            const response = await this.httpClient.request<ConsumerGrantCollection>(params);
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
