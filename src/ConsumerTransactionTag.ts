/**
 * ConsumerTransactionTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessageException} from "./CommonMessageException";
import {ConsumerTransaction} from "./ConsumerTransaction";
import {ConsumerTransactionCollection} from "./ConsumerTransactionCollection";

export class ConsumerTransactionTag extends TagAbstract {
    /**
     * @returns {Promise<ConsumerTransaction>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(transactionId: string): Promise<ConsumerTransaction> {
        const url = this.parser.url('/consumer/transaction/$transaction_id<[0-9]+|^~>', {
            'transaction_id': transactionId,
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
            const response = await this.httpClient.request<ConsumerTransaction>(params);
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
     * @returns {Promise<ConsumerTransactionCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<ConsumerTransactionCollection> {
        const url = this.parser.url('/consumer/transaction', {
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
            const response = await this.httpClient.request<ConsumerTransactionCollection>(params);
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
