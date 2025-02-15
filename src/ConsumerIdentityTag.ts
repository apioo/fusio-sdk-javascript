/**
 * ConsumerIdentityTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";
import {ConsumerIdentityCollection} from "./ConsumerIdentityCollection";
import {Passthru} from "./Passthru";

export class ConsumerIdentityTag extends TagAbstract {
    /**
     * @returns {Promise<Passthru>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async exchange(identity: string): Promise<Passthru> {
        const url = this.parser.url('/consumer/identity/:identity/exchange', {
            'identity': identity,
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
            return await response.json() as Passthru;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<ConsumerIdentityCollection>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getAll(appId?: number, appKey?: string): Promise<ConsumerIdentityCollection> {
        const url = this.parser.url('/consumer/identity', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'appId': appId,
                'appKey': appKey,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as ConsumerIdentityCollection;
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
    public async redirect(identity: string): Promise<Passthru> {
        const url = this.parser.url('/consumer/identity/:identity/redirect', {
            'identity': identity,
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
            return await response.json() as Passthru;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
