/**
 * SubscriptionTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {EventSubscription} from "./EventSubscription";
import {EventSubscriptionCollection} from "./EventSubscriptionCollection";
import {EventSubscriptionCreate} from "./EventSubscriptionCreate";
import {EventSubscriptionUpdate} from "./EventSubscriptionUpdate";
import {Message} from "./Message";
import {MessageException} from "./MessageException";

export class SubscriptionTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async delete(subscriptionId: string): Promise<Message> {
        const url = this.parser.url('/consumer/subscription/$subscription_id<[0-9]+>', {
            'subscription_id': subscriptionId,
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
    public async update(subscriptionId: string, payload: EventSubscriptionUpdate): Promise<Message> {
        const url = this.parser.url('/consumer/subscription/$subscription_id<[0-9]+>', {
            'subscription_id': subscriptionId,
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
     * @returns {Promise<EventSubscription>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async get(subscriptionId: string): Promise<EventSubscription> {
        const url = this.parser.url('/consumer/subscription/$subscription_id<[0-9]+>', {
            'subscription_id': subscriptionId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<EventSubscription>(params);
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
    public async create(payload: EventSubscriptionCreate): Promise<Message> {
        const url = this.parser.url('/consumer/subscription', {
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
     * @returns {Promise<EventSubscriptionCollection>}
     * @throws {MessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<EventSubscriptionCollection> {
        const url = this.parser.url('/consumer/subscription', {
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
            const response = await this.httpClient.request<EventSubscriptionCollection>(params);
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
