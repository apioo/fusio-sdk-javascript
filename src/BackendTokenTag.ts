/**
 * BackendTokenTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendToken} from "./BackendToken";
import {BackendTokenCollection} from "./BackendTokenCollection";
import {CommonMessageException} from "./CommonMessageException";

export class BackendTokenTag extends TagAbstract {
    /**
     * @returns {Promise<BackendToken>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(tokenId: string): Promise<BackendToken> {
        const url = this.parser.url('/backend/token/$token_id<[0-9]+>', {
            'token_id': tokenId,
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
            const response = await this.httpClient.request<BackendToken>(params);
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
     * @returns {Promise<BackendTokenCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string, from?: string, to?: string, appId?: number, userId?: number, status?: number, scope?: string, ip?: string): Promise<BackendTokenCollection> {
        const url = this.parser.url('/backend/token', {
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
                'from': from,
                'to': to,
                'appId': appId,
                'userId': userId,
                'status': status,
                'scope': scope,
                'ip': ip,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendTokenCollection>(params);
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
