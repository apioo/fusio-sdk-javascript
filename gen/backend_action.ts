import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/action";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Action_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Action_Collection>(this.url, params);
    }

    public post(data: Action): AxiosPromise<Message> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Action_Collection?: Action_Collection
    Action?: Action
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Action_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Action>
}
interface Action {
    id?: number
    status?: number
    name: string
    class?: string
    engine?: string
    config: Config
}
interface Message {
    success?: boolean
    message?: string
}
interface Config {
    [index: string]: string | number | boolean | any | Array<string | number | boolean | any>
}


