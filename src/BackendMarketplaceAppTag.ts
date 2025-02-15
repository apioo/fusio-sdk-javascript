/**
 * BackendMarketplaceAppTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {MarketplaceApp} from "./MarketplaceApp";
import {MarketplaceAppCollection} from "./MarketplaceAppCollection";
import {MarketplaceInstall} from "./MarketplaceInstall";
import {MarketplaceMessage} from "./MarketplaceMessage";

export class BackendMarketplaceAppTag extends TagAbstract {
    /**
     * @returns {Promise<MarketplaceApp>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(user: string, name: string): Promise<MarketplaceApp> {
        const url = this.parser.url('/backend/marketplace/app/:user/:name', {
            'user': user,
            'name': name,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as MarketplaceApp;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<MarketplaceAppCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, query?: string): Promise<MarketplaceAppCollection> {
        const url = this.parser.url('/backend/marketplace/app', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'startIndex': startIndex,
                'query': query,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as MarketplaceAppCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<MarketplaceMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async install(payload: MarketplaceInstall): Promise<MarketplaceMessage> {
        const url = this.parser.url('/backend/marketplace/app', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as MarketplaceMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<MarketplaceMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async upgrade(user: string, name: string): Promise<MarketplaceMessage> {
        const url = this.parser.url('/backend/marketplace/app/:user/:name', {
            'user': user,
            'name': name,
        });

        let request: HttpRequest = {
            url: url,
            method: 'PUT',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as MarketplaceMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
