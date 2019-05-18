import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private user_id: number;

    public constructor(user_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.user_id = user_id;

        this.url = baseUrl + "/backend/user/"+user_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<User> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<User>(this.url, params);
    }

    public put(data: User): AxiosPromise<Message> {
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
    User?: User
    Message?: Message
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


