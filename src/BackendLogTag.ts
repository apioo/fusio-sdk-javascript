/**
 * BackendLogTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendLog} from "./BackendLog";
import {BackendLogCollection} from "./BackendLogCollection";
import {BackendLogError} from "./BackendLogError";
import {BackendLogErrorCollection} from "./BackendLogErrorCollection";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendLogTag extends TagAbstract {
    /**
     * @returns {Promise<BackendLog>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async get(logId: string): Promise<BackendLog> {
        const url = this.parser.url('/backend/log/$log_id<[0-9]+>', {
            'log_id': logId,
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
            return await response.json() as BackendLog;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendLogCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string, from?: string, to?: string, routeId?: number, appId?: number, userId?: number, ip?: string, userAgent?: string, method?: string, path?: string, header?: string, body?: string): Promise<BackendLogCollection> {
        const url = this.parser.url('/backend/log', {
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
                'from': from,
                'to': to,
                'routeId': routeId,
                'appId': appId,
                'userId': userId,
                'ip': ip,
                'userAgent': userAgent,
                'method': method,
                'path': path,
                'header': header,
                'body': body,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as BackendLogCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendLogErrorCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAllErrors(startIndex?: number, count?: number, search?: string): Promise<BackendLogErrorCollection> {
        const url = this.parser.url('/backend/log/error', {
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
            return await response.json() as BackendLogErrorCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendLogError>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getError(errorId: string): Promise<BackendLogError> {
        const url = this.parser.url('/backend/log/error/$error_id<[0-9]+>', {
            'error_id': errorId,
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
            return await response.json() as BackendLogError;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
