import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/app/token";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<App_Token_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Token_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    App_Token_Collection?: App_Token_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    from?: string
    to?: string
    appId?: number
    userId?: number
    status?: number
    scope?: string
    ip?: string
    search?: string
}
interface App_Token_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<App_Token>
}
interface App_Token {
    id?: number
    token?: string
    scope?: string
    ip?: string
    expire?: string
    date?: string
}


