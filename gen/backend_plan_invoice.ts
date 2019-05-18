import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/plan/invoice";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Plan_Invoice_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Invoice_Collection>(this.url, params);
    }

    public post(data: Plan_Invoice_Create): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Plan_Invoice_Collection?: Plan_Invoice_Collection
    Plan_Invoice_Create?: Plan_Invoice_Create
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Plan_Invoice_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Plan_Invoice>
}
interface Plan_Invoice_Create {
    contractId: number
    startDate: string
}
interface Message {
    success?: boolean
    message?: string
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
interface Plan_User {
    id?: number
    name?: string
}


