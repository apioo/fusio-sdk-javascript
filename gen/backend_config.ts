import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/config";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Config_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Config_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Config_Collection?: Config_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    search?: string
}
interface Config_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Config>
}
interface Config {
    id?: number
    type?: number
    name?: string
    description?: string
    value?: string | number | boolean | any
}


