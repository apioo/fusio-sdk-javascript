import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/log/error";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Log_Error_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log_Error_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Log_Error_Collection?: Log_Error_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Log_Error_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Log_Error>
}
interface Log_Error {
    message?: string
    trace?: string
    file?: string
    line?: number
}


