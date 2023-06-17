/**
 * AuditTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Audit} from "./Audit";
import {AuditCollection} from "./AuditCollection";

export class AuditTag extends TagAbstract {
    /**
     * @returns {Promise<Audit>}
     * @throws {ClientException}
     */
    public async get(auditId: string): Promise<Audit> {
        const url = this.parser.url('/backend/audit/$audit_id<[0-9]+>', {
            'audit_id': auditId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Audit>(params);
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
     * @returns {Promise<AuditCollection>}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, count?: number, search?: string, from?: string, to?: string, appId?: number, userId?: number, event?: string, ip?: string, message?: string): Promise<AuditCollection> {
        const url = this.parser.url('/backend/audit', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'search': search,
                'from': from,
                'to': to,
                'appId': appId,
                'userId': userId,
                'event': event,
                'ip': ip,
                'message': message,
            }),
        };

        try {
            const response = await this.httpClient.request<AuditCollection>(params);
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
