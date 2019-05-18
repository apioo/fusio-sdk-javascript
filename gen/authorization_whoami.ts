import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/authorization/whoami";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<User> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<User>(this.url, params);
    }

}

interface Endpoint {
    User?: User
}
interface User {
    id?: number
    status?: number
    name?: string
    email?: string
    points?: number
    scopes?: Array<string>
    apps?: Array<App>
    attributes?: User_Attributes
    date?: string
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


