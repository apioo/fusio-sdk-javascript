import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private subscription_id: number;

    public constructor(subscription_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.subscription_id = subscription_id;

        this.url = baseUrl + "/consumer/subscription/"+subscription_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Subscription> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Subscription>(this.url, params);
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
    Consumer_Subscription?: Consumer_Subscription
    Consumer_App?: Consumer_App
    Consumer_Message?: Consumer_Message
}
interface Consumer_Subscription {
    id?: number
    status?: number
    event?: string
    endpoint?: string
    responses?: Array<Consumer_Subscription_Response>
}
interface Consumer_App {
    id?: number
    userId?: number
    status?: number
    name?: string
    url?: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes?: Array<string>
}
interface Consumer_Message {
    success?: boolean
    message?: string
}
interface Consumer_Subscription_Response {
    status?: number
    code?: number
    attempts?: number
    executeDate?: string
}


