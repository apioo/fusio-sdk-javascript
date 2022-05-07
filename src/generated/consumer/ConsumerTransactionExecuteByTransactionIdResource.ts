/**
 * ConsumerTransactionExecuteByTransactionIdResource generated on 2022-05-07
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
    public async consumerActionTransactionExecute(): Promise<AxiosResponse<void>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get(this.url, params);
    }

}
