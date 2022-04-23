/**
 * ConsumerTransactionResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Transaction_Collection} from "./Transaction_Collection";

export default class ConsumerTransactionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/transaction";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Transaction_Collection>}
     */
    public consumerActionTransactionGetAll(query?: Collection_Query): AxiosPromise<Transaction_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}
