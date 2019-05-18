import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/statistic/count_requests";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Statistic_Count> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Statistic_Count?: Statistic_Count
}
interface GetQuery {
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
interface Statistic_Count {
    count?: number
    from?: string
    to?: string
}


