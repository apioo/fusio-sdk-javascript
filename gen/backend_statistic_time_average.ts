import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/statistic/time_average";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Statistic_Chart> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Statistic_Chart>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Statistic_Chart?: Statistic_Chart
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
interface Statistic_Chart {
    labels?: Array<string>
    data?: Array<Array<number>>
    series?: Array<string>
}


