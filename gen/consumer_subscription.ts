import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/subscription";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Subscription_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Subscription_Collection>(this.url, params);
    }

    public post(data: Consumer_Subscription): AxiosPromise<Consumer_Message> {
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
    Consumer_Subscription_Collection?: Consumer_Subscription_Collection
    Consumer_Subscription?: Consumer_Subscription
    Consumer_Message?: Consumer_Message
}
interface Consumer_Subscription_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Subscription>
}
interface Consumer_Subscription {
    id?: number
    status?: number
    event: string
    endpoint: string
    responses?: Array<Consumer_Subscription_Response>
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


