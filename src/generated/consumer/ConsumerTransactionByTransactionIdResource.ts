/**
 * ConsumerTransactionByTransactionIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Transaction} from "./Transaction";

export default class ConsumerTransactionByTransactionIdResource extends ResourceAbstract {
    private url: string;

    private transaction_id: string;

    public constructor(transaction_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.transaction_id = transaction_id;

        this.url = baseUrl + "/consumer/transaction/"+transaction_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Transaction>>}
     */
    public async consumerActionTransactionGet(): Promise<AxiosResponse<Transaction>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Transaction>(this.url, params);
    }

}
