/**
 * BackendAccountTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {AccountChangePassword} from "./AccountChangePassword";
import {Message} from "./Message";
import {User} from "./User";
import {UserUpdate} from "./UserUpdate";

export default class BackendAccountTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async changePassword(payload: AccountChangePassword): Promise<Message> {
        const url = this.parser.url('/backend/account/change_password', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
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
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async update(payload: UserUpdate): Promise<Message> {
        const url = this.parser.url('/backend/account', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
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
     * @returns {Promise<User>}
     * @throws {ClientException}
     */
    public async get(): Promise<User> {
        const url = this.parser.url('/backend/account', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<User>(params);
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
