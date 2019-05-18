import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: number;

    public constructor(schema_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Schema> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Schema>(this.url, params);
    }

    public put(data: Schema): AxiosPromise<Message> {
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
    Schema?: Schema
    Message?: Message
}
interface Schema {
    id?: number
    status?: number
    name?: string
    source?: Schema_Source
}
interface Message {
    success?: boolean
    message?: string
}
interface Schema_Source {
    [index: string]: any;
}


