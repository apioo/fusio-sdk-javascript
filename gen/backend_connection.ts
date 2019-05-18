import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/connection";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Connection_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Connection_Collection>(this.url, params);
    }

    public post(data: Connection): AxiosPromise<Message> {
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
    Connection_Collection?: Connection_Collection
    Connection?: Connection
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Connection_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Connection>
}
interface Connection {
    id?: number
    name: string
    class?: string
    config: Connection_Config
}
interface Message {
    success?: boolean
    message?: string
}
interface Connection_Config {
    [index: string]: string | number | boolean | any | Array<string | number | boolean | any>
}


