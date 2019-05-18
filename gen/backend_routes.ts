import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/routes";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Routes_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Routes_Collection>(this.url, params);
    }

    public post(data: Routes): AxiosPromise<Message> {
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
    Routes_Collection?: Routes_Collection
    Routes?: Routes
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Routes_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Routes>
}
interface Routes {
    id?: number
    priority?: number
    path: string
    controller?: string
    scopes?: Array<string>
    config: Array<Routes_Version>
}
interface Message {
    success?: boolean
    message?: string
}
interface Routes_Version {
    version?: number
    status?: number
    methods?: Routes_Methods
}
interface Routes_Methods {
}


