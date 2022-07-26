/**
 * BackendTransactionResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Transaction_Collection_Query} from "./Backend_Transaction_Collection_Query";
import {Transaction_Collection} from "./Transaction_Collection";

export default class BackendTransactionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/transaction";
    }

    /**
     * @param {Backend_Transaction_Collection_Query} query
     * @returns {Promise<AxiosResponse<Transaction_Collection>>}
     */
    public async backendActionTransactionGetAll(query?: Backend_Transaction_Collection_Query): Promise<AxiosResponse<Transaction_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}
