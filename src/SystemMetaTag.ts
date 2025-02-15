/**
 * SystemMetaTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {Passthru} from "./Passthru";
import {SystemAbout} from "./SystemAbout";
import {SystemHealthCheck} from "./SystemHealthCheck";
import {SystemOAuthConfiguration} from "./SystemOAuthConfiguration";
import {SystemRoute} from "./SystemRoute";
import {SystemSchema} from "./SystemSchema";

export class SystemMetaTag extends TagAbstract {
    /**
     * @returns {Promise<SystemAbout>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAbout(): Promise<SystemAbout> {
        const url = this.parser.url('/system/about', {
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
            return await response.json() as SystemAbout;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<Passthru>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getDebug(payload: Passthru): Promise<Passthru> {
        const url = this.parser.url('/system/debug', {
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
            return await response.json() as Passthru;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<SystemHealthCheck>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getHealth(): Promise<SystemHealthCheck> {
        const url = this.parser.url('/system/health', {
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
            return await response.json() as SystemHealthCheck;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<SystemOAuthConfiguration>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getOAuthConfiguration(): Promise<SystemOAuthConfiguration> {
        const url = this.parser.url('/system/oauth-authorization-server', {
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
            return await response.json() as SystemOAuthConfiguration;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<SystemRoute>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getRoutes(): Promise<SystemRoute> {
        const url = this.parser.url('/system/route', {
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
            return await response.json() as SystemRoute;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<SystemSchema>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getSchema(name: string): Promise<SystemSchema> {
        const url = this.parser.url('/system/schema/:name', {
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
            return await response.json() as SystemSchema;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
