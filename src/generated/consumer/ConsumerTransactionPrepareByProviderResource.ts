/**
 * ConsumerTransactionPrepareByProviderResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Transaction_Prepare_Request} from "./Transaction_Prepare_Request";
import {Transaction_Prepare_Response} from "./Transaction_Prepare_Response";

export default class ConsumerTransactionPrepareByProviderResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private provider: string;

    public constructor(provider: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.provider = provider;

        this.url = baseUrl + "/consumer/transaction/prepare/"+provider+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Transaction_Prepare_Request} data
     * @returns {AxiosPromise<Transaction_Prepare_Response>}
     */
    public consumerActionTransactionPrepare(data?: Transaction_Prepare_Request): AxiosPromise<Transaction_Prepare_Response> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Transaction_Prepare_Response>(this.url, data, params);
    }

}
