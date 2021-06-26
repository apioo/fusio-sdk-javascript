/**
 * BackendTransactionResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Backend_Transaction_Collection_Query} from "./Backend_Transaction_Collection_Query";
import {Transaction_Collection} from "./Transaction_Collection";

export default class BackendTransactionResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/transaction";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Backend_Transaction_Collection_Query} query
     * @returns {AxiosPromise<Transaction_Collection>}
     */
    public backendActionTransactionGetAll(query?: Backend_Transaction_Collection_Query): AxiosPromise<Transaction_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}
