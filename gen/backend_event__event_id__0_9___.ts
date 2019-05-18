import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private event_id: number;

    public constructor(event_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.event_id = event_id;

        this.url = baseUrl + "/backend/event/"+event_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Event> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Event>(this.url, params);
    }

    public put(data: Event): AxiosPromise<Message> {
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
    Event?: Event
    Message?: Message
}
interface Event {
    id?: number
    name?: string
    description?: string
}
interface Message {
    success?: boolean
    message?: string
}


