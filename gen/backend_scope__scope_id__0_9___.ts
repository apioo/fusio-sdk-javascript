import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private scope_id: number;

    public constructor(scope_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.scope_id = scope_id;

        this.url = baseUrl + "/backend/scope/"+scope_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Scope> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Scope>(this.url, params);
    }

    public put(data: Scope): AxiosPromise<Message> {
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
    Scope?: Scope
    Message?: Message
}
interface Scope {
    id?: number
    name?: string
    description?: string
    routes?: Array<Scope_Route>
}
interface Message {
    success?: boolean
    message?: string
}
interface Scope_Route {
    routeId?: number
    allow?: boolean
    methods?: string
}


