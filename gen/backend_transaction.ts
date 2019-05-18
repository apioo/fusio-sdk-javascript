import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/transaction";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Transaction_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Transaction_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Transaction_Collection?: Transaction_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    from?: string
    to?: string
    planId?: number
    userId?: number
    appId?: number
    status?: number
    provider?: string
    search?: string
}
interface Transaction_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Transaction>
}
interface Transaction {
    id?: number
    status?: number
    transactionId?: string
    amount?: number
    updateDate?: string
    insertDate?: string
}


