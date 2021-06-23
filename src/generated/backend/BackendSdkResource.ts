/**
 * BackendSdkResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Sdk_Types} from "./Sdk_Types";
import {Sdk_Generate} from "./Sdk_Generate";
import {Message} from "./Message";

export default class BackendSdkResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/sdk";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Sdk_Types>}
     */
    public backendActionSdkGetAll(): AxiosPromise<Sdk_Types> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Sdk_Types>(this.url, params);
    }

    /**
     * @param {Sdk_Generate} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSdkGenerate(data?: Sdk_Generate): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
