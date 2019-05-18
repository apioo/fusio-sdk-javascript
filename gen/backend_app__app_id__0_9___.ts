import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_id: number;

    public constructor(app_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_id = app_id;

        this.url = baseUrl + "/backend/app/"+app_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<App> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App>(this.url, params);
    }

    public put(data: App): AxiosPromise<Message> {
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
    App?: App
    Message?: Message
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


