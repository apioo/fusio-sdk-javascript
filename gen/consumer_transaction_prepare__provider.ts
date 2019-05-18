import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private provider: string;

    public constructor(provider: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.provider = provider;

        this.url = baseUrl + "/consumer/transaction/prepare/"+provider+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Consumer_Transaction_Prepare_Request): AxiosPromise<Consumer_Transaction_Prepare_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Consumer_Transaction_Prepare_Response>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_Transaction_Prepare_Request?: Consumer_Transaction_Prepare_Request
    Consumer_Transaction_Prepare_Response?: Consumer_Transaction_Prepare_Response
}
interface Consumer_Transaction_Prepare_Request {
    invoiceId: number
    returnUrl: string
}
interface Consumer_Transaction_Prepare_Response {
    approvalUrl?: string
}


