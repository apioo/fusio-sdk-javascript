import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private transaction_id: number;

    public constructor(transaction_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.transaction_id = transaction_id;

        this.url = baseUrl + "/consumer/transaction/"+transaction_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Transaction> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Transaction>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Transaction?: Consumer_Transaction
}
interface Consumer_Transaction {
    id?: number
    status?: number
    transactionId?: string
    amount?: number
    updateDate?: string
    insertDate?: string
}


