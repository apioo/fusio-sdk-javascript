import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/transaction";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Transaction_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Transaction_Collection>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Transaction_Collection?: Consumer_Transaction_Collection
}
interface Consumer_Transaction_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Transaction>
}
interface Consumer_Transaction {
    id?: number
    status?: number
    transactionId?: string
    amount?: number
    updateDate?: string
    insertDate?: string
}


