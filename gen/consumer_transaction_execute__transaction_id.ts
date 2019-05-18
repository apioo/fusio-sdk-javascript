import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
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
     * Executes the payment on the remote provider and redirects the user to the app using the provided return url
     */
    public get() {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<>(this.url, params);
    }

}

interface Endpoint {
}


