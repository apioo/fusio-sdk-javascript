/**
 * BackendTrashTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendTrashDataCollection} from "./BackendTrashDataCollection";
import {BackendTrashRestore} from "./BackendTrashRestore";
import {BackendTrashTypes} from "./BackendTrashTypes";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendTrashTag extends TagAbstract {
    /**
     * @returns {Promise<BackendTrashDataCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAllByType(type: string, startIndex?: number, count?: number, search?: string): Promise<BackendTrashDataCollection> {
        const url = this.parser.url('/backend/trash/:type', {
            'type': type,
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
            return await response.json() as BackendTrashDataCollection;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendTrashTypes>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getTypes(): Promise<BackendTrashTypes> {
        const url = this.parser.url('/backend/trash', {
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
            return await response.json() as BackendTrashTypes;
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
    public async restore(type: string, payload: BackendTrashRestore): Promise<CommonMessage> {
        const url = this.parser.url('/backend/trash/:type', {
            'type': type,
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



}
