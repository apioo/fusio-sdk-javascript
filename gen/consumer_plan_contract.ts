import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/plan/contract";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Plan_Contract_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Plan_Contract_Collection>(this.url, params);
    }

    public post(data: Consumer_Plan_Order_Request): AxiosPromise<Consumer_Plan_Order_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Consumer_Plan_Order_Response>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_Plan_Contract_Collection?: Consumer_Plan_Contract_Collection
    Consumer_Plan_Order_Request?: Consumer_Plan_Order_Request
    Consumer_Plan_Order_Response?: Consumer_Plan_Order_Response
}
interface Consumer_Plan_Contract_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Plan_Contract>
}
interface Consumer_Plan_Order_Request {
    planId: number
}
interface Consumer_Plan_Order_Response {
    contractId?: number
    invoiceId?: number
}
interface Consumer_Plan_Contract {
    id?: number
    status?: number
    plan?: Consumer_Plan
    amount?: number
    points?: number
    period?: number
    invoices?: Array<Consumer_Plan_Invoice>
    insertDate?: string
}
interface Consumer_Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
}
interface Consumer_Plan_Invoice {
    id?: number
    status?: number
    amount?: number
    points?: number
    payDate?: string
    insertDate?: string
}


