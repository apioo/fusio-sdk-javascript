import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private invoice_id: number;

    public constructor(invoice_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.invoice_id = invoice_id;

        this.url = baseUrl + "/backend/plan/invoice/"+invoice_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Plan_Invoice> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Invoice>(this.url, params);
    }

    public put(data: Plan_Invoice): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    public delete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}

interface Endpoint {
    Plan_Invoice?: Plan_Invoice
    Message?: Message
}
interface Plan_Invoice {
    id?: number
    contractId?: number
    user?: Plan_User
    transactionId?: number
    prevId?: number
    displayId?: string
    status?: number
    amount?: number
    points?: number
    fromDate?: string
    toDate?: string
    payDate?: string
    insertDate?: string
}
interface Message {
    success?: boolean
    message?: string
}
interface Plan_User {
    id?: number
    name?: string
}


