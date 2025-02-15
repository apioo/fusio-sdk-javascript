/**
 * BackendActionTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendAction} from "./BackendAction";
import {BackendActionCollection} from "./BackendActionCollection";
import {BackendActionCreate} from "./BackendActionCreate";
import {BackendActionExecuteRequest} from "./BackendActionExecuteRequest";
import {BackendActionExecuteResponse} from "./BackendActionExecuteResponse";
import {BackendActionIndex} from "./BackendActionIndex";
import {BackendActionUpdate} from "./BackendActionUpdate";
import {CommonFormContainer} from "./CommonFormContainer";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendActionTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async create(payload: BackendActionCreate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action', {
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
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async delete(actionId: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
        });

        let request: HttpRequest = {
            url: url,
            method: 'DELETE',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
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
     * @returns {Promise<BackendActionExecuteResponse>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async execute(actionId: string, payload: BackendActionExecuteRequest): Promise<BackendActionExecuteResponse> {
        const url = this.parser.url('/backend/action/execute/:action_id', {
            'action_id': actionId,
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
            return await response.json() as BackendActionExecuteResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendAction>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(actionId: string): Promise<BackendAction> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
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
            return await response.json() as BackendAction;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendActionCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string): Promise<BackendActionCollection> {
        const url = this.parser.url('/backend/action', {
        });

        let request: HttpRequest = {
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

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as BackendActionCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendActionIndex>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getClasses(): Promise<BackendActionIndex> {
        const url = this.parser.url('/backend/action/list', {
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
            return await response.json() as BackendActionIndex;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<CommonFormContainer>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getForm(_class?: string): Promise<CommonFormContainer> {
        const url = this.parser.url('/backend/action/form', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'class': _class,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as CommonFormContainer;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async update(actionId: string, payload: BackendActionUpdate): Promise<CommonMessage> {
        const url = this.parser.url('/backend/action/$action_id<[0-9]+|^~>', {
            'action_id': actionId,
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
