/**
 * BackendMarketplaceAppTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {MarketplaceApp} from "./MarketplaceApp";
import {MarketplaceAppCollection} from "./MarketplaceAppCollection";
import {MarketplaceInstall} from "./MarketplaceInstall";
import {MarketplaceMessage} from "./MarketplaceMessage";
import {MarketplaceMessageException} from "./MarketplaceMessageException";

export class BackendMarketplaceAppTag extends TagAbstract {
    /**
     * @returns {Promise<MarketplaceMessage>}
     * @throws {MarketplaceMessageExceptionException}
     * @throws {ClientException}
     */
    public async upgrade(user: string, name: string): Promise<MarketplaceMessage> {
        const url = this.parser.url('/backend/marketplace/app/:user/:name', {
            'user': user,
            'name': name,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<MarketplaceMessage>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MarketplaceMessageException(error.response.data);
                    case 401:
                        throw new MarketplaceMessageException(error.response.data);
                    case 404:
                        throw new MarketplaceMessageException(error.response.data);
                    case 410:
                        throw new MarketplaceMessageException(error.response.data);
                    case 500:
                        throw new MarketplaceMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<MarketplaceApp>}
     * @throws {MarketplaceMessageExceptionException}
     * @throws {ClientException}
     */
    public async get(user: string, name: string): Promise<MarketplaceApp> {
        const url = this.parser.url('/backend/marketplace/app/:user/:name', {
            'user': user,
            'name': name,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<MarketplaceApp>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MarketplaceMessageException(error.response.data);
                    case 404:
                        throw new MarketplaceMessageException(error.response.data);
                    case 410:
                        throw new MarketplaceMessageException(error.response.data);
                    case 500:
                        throw new MarketplaceMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<MarketplaceMessage>}
     * @throws {MarketplaceMessageExceptionException}
     * @throws {ClientException}
     */
    public async install(payload: MarketplaceInstall): Promise<MarketplaceMessage> {
        const url = this.parser.url('/backend/marketplace/app', {
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
            const response = await this.httpClient.request<MarketplaceMessage>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new MarketplaceMessageException(error.response.data);
                    case 401:
                        throw new MarketplaceMessageException(error.response.data);
                    case 500:
                        throw new MarketplaceMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<MarketplaceAppCollection>}
     * @throws {MarketplaceMessageExceptionException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, query?: string): Promise<MarketplaceAppCollection> {
        const url = this.parser.url('/backend/marketplace/app', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'query': query,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<MarketplaceAppCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 401:
                        throw new MarketplaceMessageException(error.response.data);
                    case 500:
                        throw new MarketplaceMessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
