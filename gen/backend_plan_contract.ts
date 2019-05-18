import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/plan/contract";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Plan_Contract_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Contract_Collection>(this.url, params);
    }

    public post(data: Plan_Contract): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Plan_Contract_Collection?: Plan_Contract_Collection
    Plan_Contract?: Plan_Contract
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Plan_Contract_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Plan_Contract>
}
interface Plan_Contract {
    id?: number
    user?: Plan_User
    plan?: Plan
    status?: number
    amount?: number
    points?: number
    period?: number
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
interface Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
    period?: number
}


