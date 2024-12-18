/**
 * BackendBackupTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendBackupExport} from "./BackendBackupExport";
import {BackendBackupImport} from "./BackendBackupImport";
import {BackendBackupImportResult} from "./BackendBackupImportResult";
import {CommonMessageException} from "./CommonMessageException";

export class BackendBackupTag extends TagAbstract {
    /**
     * @returns {Promise<BackendBackupExport>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async export(): Promise<BackendBackupExport> {
        const url = this.parser.url('/backend/backup/export', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BackendBackupExport>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<BackendBackupImportResult>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async import(payload: BackendBackupImport): Promise<BackendBackupImportResult> {
        const url = this.parser.url('/backend/backup/import', {
        });

        let params: AxiosRequestConfig = {
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

        try {
            const response = await this.httpClient.request<BackendBackupImportResult>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                if (statusCode >= 0 && statusCode <= 999) {
                    throw new CommonMessageException(error.response.data);
                }

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
