import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/event";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Event_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Event_Collection>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Event_Collection?: Consumer_Event_Collection
}
interface Consumer_Event_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Event>
}
interface Consumer_Event {
    id?: number
    name?: string
    description?: string
}


