import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/doc";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Documentation_Index> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<Documentation_Index>(this.url, params);
    }

}

interface Endpoint {
    Documentation_Index?: Documentation_Index
}
interface Documentation_Index {
    routings?: Array<Documentation_Route>
    links?: Array<Discovery_Link>
}
interface Documentation_Route {
    path?: string
    methods?: Array<string>
    version?: string
}
interface Discovery_Link {
    rel?: string
    href?: string
}


