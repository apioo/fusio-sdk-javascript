/**
 * ConsumerTransactionResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Transaction_Collection} from "./Transaction_Collection";

export default class ConsumerTransactionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/transaction";
    }

    /**
     * @param {Collection_Query} query
     * @returns {Promise<AxiosResponse<Transaction_Collection>>}
     */
    public async consumerActionTransactionGetAll(query?: Collection_Query): Promise<AxiosResponse<Transaction_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}
