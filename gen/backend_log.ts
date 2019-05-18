import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/log";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Log_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Log_Collection?: Log_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    from?: string
    to?: string
    routeId?: number
    appId?: number
    userId?: number
    ip?: string
    userAgent?: string
    method?: string
    path?: string
    header?: string
    body?: string
    search?: string
}
interface Log_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Log>
}
interface Log {
    id?: number
    ip?: string
    userAgent?: string
    method?: string
    path?: string
    header?: string
    body?: string
    date?: string
    errors?: Array<Log_Error>
}
interface Log_Error {
    message?: string
    trace?: string
    file?: string
    line?: number
}


