import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/scope";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Scope_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Scope_Collection>(this.url, params);
    }

    public post(data: Scope): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Scope_Collection?: Scope_Collection
    Scope?: Scope
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Scope_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Scope>
}
interface Scope {
    id?: number
    name: string
    description?: string
    routes?: Array<Scope_Route>
}
interface Message {
    success?: boolean
    message?: string
}
interface Scope_Route {
    routeId?: number
    allow?: boolean
    methods?: string
}


