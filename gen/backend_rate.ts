import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/rate";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Rate_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Rate_Collection>(this.url, params);
    }

    public post(data: Rate): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Rate_Collection?: Rate_Collection
    Rate?: Rate
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Rate_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Rate>
}
interface Rate {
    id?: number
    priority?: number
    name: string
    rateLimit: number
    timespan: string
    allocation?: Array<Rate_Allocation>
}
interface Message {
    success?: boolean
    message?: string
}
interface Rate_Allocation {
    id?: number
    routeId?: number
    appId?: number
    authenticated?: boolean
    parameters?: string
}


