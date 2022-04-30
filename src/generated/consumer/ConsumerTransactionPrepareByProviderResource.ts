/**
 * ConsumerTransactionPrepareByProviderResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Transaction_Prepare_Request} from "./Transaction_Prepare_Request";
import {Transaction_Prepare_Response} from "./Transaction_Prepare_Response";

export default class ConsumerTransactionPrepareByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/transaction/prepare/"+provider+"";
    }

    /**
     * @param {Transaction_Prepare_Request} data
     * @returns {AxiosPromise<Transaction_Prepare_Response>}
     */
    public consumerActionTransactionPrepare(data?: Transaction_Prepare_Request): AxiosPromise<Transaction_Prepare_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Transaction_Prepare_Response>(this.url, data, params);
    }

}
