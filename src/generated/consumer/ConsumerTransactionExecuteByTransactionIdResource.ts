/**
 * ConsumerTransactionExecuteByTransactionIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";

export default class ConsumerTransactionExecuteByTransactionIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private transaction_id: string;

    public constructor(transaction_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.transaction_id = transaction_id;

        this.url = baseUrl + "/consumer/transaction/execute/"+transaction_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<void>}
     */
    public consumerActionTransactionExecute() {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get(this.url, params);
    }

}
