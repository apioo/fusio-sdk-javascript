import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/user";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<User_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<User_Collection>(this.url, params);
    }

    public post(data: User): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    User_Collection?: User_Collection
    User?: User
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface User_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<User>
}
interface User {
    id?: number
    status: number
    name: string
    email: string
    points?: number
    scopes?: Array<string>
    apps?: Array<App>
    attributes?: User_Attributes
    date?: string
    password: string
}
interface Message {
    success?: boolean
    message?: string
}
interface App {
    id?: number
    userId?: number
    status?: number
    name?: string
    url?: string
    parameters?: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes?: Array<string>
    tokens?: Array<App_Token>
}
interface User_Attributes {
    [index: string]: string
}
interface App_Token {
    id?: number
    token?: string
    scope?: string
    ip?: string
    expire?: string
    date?: string
}


