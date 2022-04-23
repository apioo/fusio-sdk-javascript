/**
 * BackendTransactionResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Transaction_Collection_Query} from "./Backend_Transaction_Collection_Query";
import {Transaction_Collection} from "./Transaction_Collection";

export default class BackendTransactionResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/transaction";
    }

    /**
     * @param {Backend_Transaction_Collection_Query} query
     * @returns {AxiosPromise<Transaction_Collection>}
     */
    public backendActionTransactionGetAll(query?: Backend_Transaction_Collection_Query): AxiosPromise<Transaction_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}
