import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/plan";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Plan_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Collection>(this.url, params);
    }

    public post(data: Plan): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Plan_Collection?: Plan_Collection
    Plan?: Plan
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Plan_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Plan>
}
interface Plan {
    id?: number
    name: string
    description?: string
    price: number
    points?: number
    period?: number
}
interface Message {
    success?: boolean
    message?: string
}


