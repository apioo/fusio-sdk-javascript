/**
 * BackendStatisticIncomingTransactionsResource generated on 2022-07-09
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Transaction_Collection_Query} from "./Backend_Transaction_Collection_Query";
import {Statistic_Chart} from "./Statistic_Chart";

export default class BackendStatisticIncomingTransactionsResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/incoming_transactions";
    }

    /**
     * @param {Backend_Transaction_Collection_Query} query
     * @returns {Promise<AxiosResponse<Statistic_Chart>>}
     */
    public async backendActionStatisticGetIncomingTransactions(query?: Backend_Transaction_Collection_Query): Promise<AxiosResponse<Statistic_Chart>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Statistic_Chart>(this.url, params);
    }

}
