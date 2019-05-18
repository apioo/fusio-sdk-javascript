import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private rate_id: number;

    public constructor(rate_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.rate_id = rate_id;

        this.url = baseUrl + "/backend/rate/"+rate_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Rate> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Rate>(this.url, params);
    }

    public put(data: Rate): AxiosPromise<Message> {
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
    Rate?: Rate
    Message?: Message
}
interface Rate {
    id?: number
    priority?: number
    name?: string
    rateLimit?: number
    timespan?: string
    allocation?: Array<Rate_Allocation>
}
interface Message {
    success?: boolean
    message?: string
}
interface Rate_Allocation {
    id?: number
    routeId?: number
    appId?: number
    authenticated?: boolean
    parameters?: string
}


