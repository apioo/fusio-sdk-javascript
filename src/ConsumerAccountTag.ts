/**
 * ConsumerAccountTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendAccountChangePassword} from "./BackendAccountChangePassword";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerAuthorizeMeta} from "./ConsumerAuthorizeMeta";
import {ConsumerAuthorizeRequest} from "./ConsumerAuthorizeRequest";
import {ConsumerAuthorizeResponse} from "./ConsumerAuthorizeResponse";
import {ConsumerUserAccount} from "./ConsumerUserAccount";
import {ConsumerUserActivate} from "./ConsumerUserActivate";
import {ConsumerUserEmail} from "./ConsumerUserEmail";
import {ConsumerUserJWT} from "./ConsumerUserJWT";
import {ConsumerUserLogin} from "./ConsumerUserLogin";
import {ConsumerUserPasswordReset} from "./ConsumerUserPasswordReset";
import {ConsumerUserRefresh} from "./ConsumerUserRefresh";
import {ConsumerUserRegister} from "./ConsumerUserRegister";

export class ConsumerAccountTag extends TagAbstract {
    /**
     * Activates an previously registered account through a token which was provided to the user via email
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async activate(payload: ConsumerUserActivate): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/activate', {
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
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Authorizes the access of a specific app for the authenticated user
     *
     * @returns {Promise<ConsumerAuthorizeResponse>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async authorize(payload: ConsumerAuthorizeRequest): Promise<ConsumerAuthorizeResponse> {
        const url = this.parser.url('/consumer/authorize', {
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
            return await response.json() as ConsumerAuthorizeResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Change the password for the authenticated user
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async changePassword(payload: BackendAccountChangePassword): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/account/change_password', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Change the password after the password reset flow was started
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async executePasswordReset(payload: ConsumerUserPasswordReset): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/password_reset', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Returns a user data for the authenticated user
     *
     * @returns {Promise<ConsumerUserAccount>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(): Promise<ConsumerUserAccount> {
        const url = this.parser.url('/consumer/account', {
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
            return await response.json() as ConsumerUserAccount;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Returns information about a specific app to start the OAuth2 authorization code flow
     *
     * @returns {Promise<ConsumerAuthorizeMeta>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getApp(clientId?: string, scope?: string): Promise<ConsumerAuthorizeMeta> {
        const url = this.parser.url('/consumer/authorize', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'client_id': clientId,
                'scope': scope,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as ConsumerAuthorizeMeta;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * User login by providing a username and password
     *
     * @returns {Promise<ConsumerUserJWT>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async login(payload: ConsumerUserLogin): Promise<ConsumerUserJWT> {
        const url = this.parser.url('/consumer/login', {
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
            return await response.json() as ConsumerUserJWT;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Refresh a previously obtained access token
     *
     * @returns {Promise<ConsumerUserJWT>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async refresh(payload: ConsumerUserRefresh): Promise<ConsumerUserJWT> {
        const url = this.parser.url('/consumer/login', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as ConsumerUserJWT;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Register a new user account
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async register(payload: ConsumerUserRegister): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/register', {
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
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Start the password reset flow
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async requestPasswordReset(payload: ConsumerUserEmail): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/password_reset', {
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
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Updates user data for the authenticated user
     *
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async update(payload: ConsumerUserAccount): Promise<CommonMessage> {
        const url = this.parser.url('/consumer/account', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as CommonMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
