import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/app";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_App_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_App_Collection>(this.url, params);
    }

    public post(data: Consumer_App): AxiosPromise<Consumer_Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Consumer_Message>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_App_Collection?: Consumer_App_Collection
    Consumer_App?: Consumer_App
    Consumer_Message?: Consumer_Message
}
interface Consumer_App_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_App>
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


