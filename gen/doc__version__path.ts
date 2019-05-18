import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private version: string;
    private path: string;

    public constructor(version: string, path: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.version = version;
        this.path = path;

        this.url = baseUrl + "/doc/"+version+"/*path";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Documentation_Detail> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<Documentation_Detail>(this.url, params);
    }

}

interface Endpoint {
    Documentation_Detail?: Documentation_Detail
}
interface Documentation_Detail {
    path?: string
    version?: string
    status?: number
    description?: string
    schema?: Documentation_Schema
    pathParameters?: string
    methods?: Documentation_Methods
    links?: Array<Discovery_Link>
}
interface Documentation_Schema {
}
interface Documentation_Methods {
    [index: string]: Documentation_Method
}
interface Discovery_Link {
    rel?: string
    href?: string
}
interface Documentation_Method {
    description?: string
    queryParameters?: string
    request?: string
    responses?: Documentation_Method_Responses
}
interface Documentation_Method_Responses {
    [index: string]: string
}


