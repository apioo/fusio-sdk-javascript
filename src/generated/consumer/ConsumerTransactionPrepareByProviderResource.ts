/**
 * ConsumerTransactionPrepareByProviderResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Transaction_Prepare_Request} from "./Transaction_Prepare_Request";
import {Transaction_Prepare_Response} from "./Transaction_Prepare_Response";

export default class ConsumerTransactionPrepareByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/transaction/prepare/"+provider+"";
    }

    /**
     * @param {Transaction_Prepare_Request} data
     * @returns {Promise<AxiosResponse<Transaction_Prepare_Response>>}
     */
    public async consumerActionTransactionPrepare(data?: Transaction_Prepare_Request): Promise<AxiosResponse<Transaction_Prepare_Response>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.post<Transaction_Prepare_Response>(this.url, data, params);
    }

}
