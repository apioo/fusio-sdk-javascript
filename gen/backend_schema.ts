import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/schema";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Schema_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Schema_Collection>(this.url, params);
    }

    public post(data: Schema): AxiosPromise<Message> {
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
    Schema_Collection?: Schema_Collection
    Schema?: Schema
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Schema_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Schema>
}
interface Schema {
    id?: number
    status?: number
    name: string
    source?: Schema_Source
}
interface Message {
    success?: boolean
    message?: string
}
interface Schema_Source {
    [index: string]: any;
}


