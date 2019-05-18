import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/cronjob";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Cronjob_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Cronjob_Collection>(this.url, params);
    }

    public post(data: Cronjob): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Cronjob_Collection?: Cronjob_Collection
    Cronjob?: Cronjob
    Message?: Message
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Cronjob_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Cronjob>
}
interface Cronjob {
    id?: number
    name: string
    cron: string
    action: number
    executeDate?: string
    exitCode?: number
    errors?: Array<Cronjob_Error>
}
interface Message {
    success?: boolean
    message?: string
}
interface Cronjob_Error {
    message?: string
    trace?: string
    file?: string
    line?: number
}


