import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/app";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<App_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Collection>(this.url, params);
    }

    public post(data: App): AxiosPromise<Message> {
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
    App_Collection?: App_Collection
    App?: App
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface App_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<App>
}
interface App {
    id?: number
    userId: number
    status?: number
    name: string
    url: string
    parameters?: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes: Array<string>
    tokens?: Array<App_Token>
}
interface Message {
    success?: boolean
    message?: string
}
interface App_Token {
    id?: number
    token?: string
    scope?: string
    ip?: string
    expire?: string
    date?: string
}


