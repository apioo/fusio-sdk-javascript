/**
 * BackendSdkTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendSdkGenerate} from "./BackendSdkGenerate";
import {BackendSdkMessage} from "./BackendSdkMessage";
import {BackendSdkResponse} from "./BackendSdkResponse";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendSdkTag extends TagAbstract {
    /**
     * @returns {Promise<BackendSdkMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async generate(payload: BackendSdkGenerate): Promise<BackendSdkMessage> {
        const url = this.parser.url('/backend/sdk', {
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
            return await response.json() as BackendSdkMessage;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendSdkResponse>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(): Promise<BackendSdkResponse> {
        const url = this.parser.url('/backend/sdk', {
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
            return await response.json() as BackendSdkResponse;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
