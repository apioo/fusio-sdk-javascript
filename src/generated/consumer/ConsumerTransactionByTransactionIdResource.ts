/**
 * ConsumerTransactionByTransactionIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Transaction} from "./Transaction";

export default class ConsumerTransactionByTransactionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private transaction_id: string;

    public constructor(transaction_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.transaction_id = transaction_id;

        this.url = baseUrl + "/consumer/transaction/"+transaction_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Transaction>}
     */
    public consumerActionTransactionGet(): AxiosPromise<Transaction> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Transaction>(this.url, params);
    }

}
