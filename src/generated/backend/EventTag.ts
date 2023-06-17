/**
 * EventTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Event} from "./Event";
import {EventCollection} from "./EventCollection";
import {EventCreate} from "./EventCreate";
import {EventSubscription} from "./EventSubscription";
import {EventSubscriptionCollection} from "./EventSubscriptionCollection";
import {EventSubscriptionCreate} from "./EventSubscriptionCreate";
import {EventSubscriptionUpdate} from "./EventSubscriptionUpdate";
import {EventUpdate} from "./EventUpdate";
import {Message} from "./Message";

export class EventTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async delete(eventId: string): Promise<Message> {
        const url = this.parser.url('/backend/event/$event_id<[0-9]+|^~>', {
            'event_id': eventId,
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async update(eventId: string, payload: EventUpdate): Promise<Message> {
        const url = this.parser.url('/backend/event/$event_id<[0-9]+|^~>', {
            'event_id': eventId,
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Event>}
     * @throws {ClientException}
     */
    public async get(eventId: string): Promise<Event> {
        const url = this.parser.url('/backend/event/$event_id<[0-9]+|^~>', {
            'event_id': eventId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Event>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async create(payload: EventCreate): Promise<Message> {
        const url = this.parser.url('/backend/event', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<EventCollection>}
     * @throws {ClientException}
     */
    public async getAll(categoryId?: number, startIndex?: number, count?: number, search?: string): Promise<EventCollection> {
        const url = this.parser.url('/backend/event', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'categoryId': categoryId,
                'startIndex': startIndex,
                'count': count,
                'search': search,
            }),
        };

        try {
            const response = await this.httpClient.request<EventCollection>(params);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async deleteSubscription(subscriptionId: string): Promise<Message> {
        const url = this.parser.url('/backend/event/subscription/$subscription_id<[0-9]+>', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async updateSubscription(subscriptionId: string, payload: EventSubscriptionUpdate): Promise<Message> {
        const url = this.parser.url('/backend/event/subscription/$subscription_id<[0-9]+>', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<EventSubscription>}
     * @throws {ClientException}
     */
    public async getSubscription(subscriptionId: string): Promise<EventSubscription> {
        const url = this.parser.url('/backend/event/subscription/$subscription_id<[0-9]+>', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async createSubscription(payload: EventSubscriptionCreate): Promise<Message> {
        const url = this.parser.url('/backend/event/subscription', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }

    /**
     * @returns {Promise<EventSubscriptionCollection>}
     * @throws {ClientException}
     */
    public async getAllSubscriptions(startIndex?: number, count?: number, search?: string): Promise<EventSubscriptionCollection> {
        const url = this.parser.url('/backend/event/subscription', {
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
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            }

            throw new ClientException('An unknown error occurred: ' + String(error));
        }
    }


}
