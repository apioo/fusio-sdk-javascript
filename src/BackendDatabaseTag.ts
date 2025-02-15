/**
 * BackendDatabaseTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BackendDatabaseConnections} from "./BackendDatabaseConnections";
import {BackendDatabaseRow} from "./BackendDatabaseRow";
import {BackendDatabaseRows} from "./BackendDatabaseRows";
import {BackendDatabaseTable} from "./BackendDatabaseTable";
import {BackendDatabaseTables} from "./BackendDatabaseTables";
import {CommonMessage} from "./CommonMessage";
import {CommonMessageException} from "./CommonMessageException";

export class BackendDatabaseTag extends TagAbstract {
    /**
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async createRow(connectionId: string, tableName: string, payload: BackendDatabaseRow): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name/rows', {
            'connection_id': connectionId,
            'table_name': tableName,
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
    public async createTable(connectionId: string, payload: BackendDatabaseTable): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id', {
            'connection_id': connectionId,
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
    public async deleteRow(connectionId: string, tableName: string, id: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name/rows/:id', {
            'connection_id': connectionId,
            'table_name': tableName,
            'id': id,
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
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async deleteTable(connectionId: string, tableName: string): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name', {
            'connection_id': connectionId,
            'table_name': tableName,
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
     * @returns {Promise<BackendDatabaseConnections>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getConnections(): Promise<BackendDatabaseConnections> {
        const url = this.parser.url('/backend/database', {
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
            return await response.json() as BackendDatabaseConnections;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendDatabaseRow>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getRow(connectionId: string, tableName: string, id: string): Promise<BackendDatabaseRow> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name/rows/:id', {
            'connection_id': connectionId,
            'table_name': tableName,
            'id': id,
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
            return await response.json() as BackendDatabaseRow;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendDatabaseRows>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getRows(connectionId: string, tableName: string, startIndex?: number, count?: number, filterBy?: string, filterOp?: string, filterValue?: string, sortBy?: string, sortOrder?: string, columns?: string): Promise<BackendDatabaseRows> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name/rows', {
            'connection_id': connectionId,
            'table_name': tableName,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'startIndex': startIndex,
                'count': count,
                'filterBy': filterBy,
                'filterOp': filterOp,
                'filterValue': filterValue,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'columns': columns,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as BackendDatabaseRows;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendDatabaseTable>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getTable(connectionId: string, tableName: string): Promise<BackendDatabaseTable> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name', {
            'connection_id': connectionId,
            'table_name': tableName,
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
            return await response.json() as BackendDatabaseTable;
        }

        const statusCode = response.status;
        if (statusCode >= 0 && statusCode <= 999) {
            throw new CommonMessageException(await response.json() as CommonMessage);
        }

        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * @returns {Promise<BackendDatabaseTables>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async getTables(connectionId: string): Promise<BackendDatabaseTables> {
        const url = this.parser.url('/backend/database/:connection_id', {
            'connection_id': connectionId,
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
            return await response.json() as BackendDatabaseTables;
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
    public async updateRow(connectionId: string, tableName: string, id: string, payload: BackendDatabaseRow): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name/rows/:id', {
            'connection_id': connectionId,
            'table_name': tableName,
            'id': id,
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
     * @returns {Promise<CommonMessage>}
     * @throws {CommonMessageException}
     * @throws {ClientException}
     */
    public async updateTable(connectionId: string, tableName: string, payload: BackendDatabaseTable): Promise<CommonMessage> {
        const url = this.parser.url('/backend/database/:connection_id/:table_name', {
            'connection_id': connectionId,
            'table_name': tableName,
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
