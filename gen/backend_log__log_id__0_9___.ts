import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private log_id: number;

    public constructor(log_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.log_id = log_id;

        this.url = baseUrl + "/backend/log/"+log_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Log> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log>(this.url, params);
    }

}

interface Endpoint {
    Log?: Log
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


