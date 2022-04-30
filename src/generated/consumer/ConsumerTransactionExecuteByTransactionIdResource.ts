/**
 * ConsumerTransactionExecuteByTransactionIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"

export default class ConsumerTransactionExecuteByTransactionIdResource extends ResourceAbstract {
    private url: string;

    private transaction_id: string;

    public constructor(transaction_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.transaction_id = transaction_id;

        this.url = baseUrl + "/consumer/transaction/execute/"+transaction_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<void>>}
     */
    public async consumerActionTransactionExecute() {
        let params: AxiosRequestConfig = {
            method: 'GET',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get(this.url, params);
    }

}
