/**
 * BackendCategoryTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Category} from "./Category";
import {CategoryCollection} from "./CategoryCollection";
import {CategoryCreate} from "./CategoryCreate";
import {CategoryUpdate} from "./CategoryUpdate";
import {Message} from "./Message";

export default class BackendCategoryTag extends TagAbstract {
    /**
     * @returns {Promise<Message>}
     * @throws {ClientException}
     */
    public async delete(categoryId: string): Promise<Message> {
        const url = this.parser.url('/backend/category/$category_id<[0-9]+|^~>', {
            'category_id': categoryId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }),
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
    public async update(categoryId: string, payload: CategoryUpdate): Promise<Message> {
        const url = this.parser.url('/backend/category/$category_id<[0-9]+|^~>', {
            'category_id': categoryId,
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
     * @returns {Promise<Category>}
     * @throws {ClientException}
     */
    public async get(categoryId: string): Promise<Category> {
        const url = this.parser.url('/backend/category/$category_id<[0-9]+|^~>', {
            'category_id': categoryId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<Category>(params);
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
    public async insert(payload: CategoryCreate): Promise<Message> {
        const url = this.parser.url('/backend/category', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
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
     * @returns {Promise<CategoryCollection>}
     * @throws {ClientException}
     */
    public async getAll(): Promise<CategoryCollection> {
        const url = this.parser.url('/backend/category', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }),
        };

        try {
            const response = await this.httpClient.request<CategoryCollection>(params);
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
