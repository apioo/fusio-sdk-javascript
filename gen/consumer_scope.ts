import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/scope";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Scope_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Scope_Collection>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Scope_Collection?: Consumer_Scope_Collection
}
interface Consumer_Scope_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Scope>
}
interface Consumer_Scope {
    id?: number
    name?: string
    description?: string
}


