import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_id: number;

    public constructor(app_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_id = app_id;

        this.url = baseUrl + "/consumer/app/"+app_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_App> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_App>(this.url, params);
    }

    public put(data: Consumer_App): AxiosPromise<Consumer_Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Consumer_Message>(this.url, data, params);
    }

    public delete(): AxiosPromise<Consumer_Message> {
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
    Consumer_App?: Consumer_App
    Consumer_Message?: Consumer_Message
}
interface Consumer_App {
    id?: number
    userId?: number
    status?: number
    name: string
    url: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes: Array<string>
}
interface Consumer_Message {
    success?: boolean
    message?: string
}


