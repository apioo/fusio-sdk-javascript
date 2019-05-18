import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/import/process";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Adapter): AxiosPromise<Import_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Import_Response>(this.url, data, params);
    }

}

interface Endpoint {
    Adapter?: Adapter
    Import_Response?: Import_Response
}
interface Adapter {
    actionClass?: Array<string>
    connectionClass?: Array<string>
    routes?: Array<Routes>
    action?: Array<Action>
    schema?: Array<Schema>
    connection?: Array<Connection>
}
interface Import_Response {
    success?: boolean
    message?: string
    result?: Array<string>
}
interface Routes {
    id?: number
    priority?: number
    path?: string
    controller?: string
    scopes?: Array<string>
    config?: Array<Routes_Version>
}
interface Action {
    id?: number
    status?: number
    name?: string
    class?: string
    engine?: string
    config?: Config
}
interface Schema {
    id?: number
    status?: number
    name?: string
    source?: Schema_Source
}
interface Connection {
    id?: number
    name?: string
    class?: string
    config?: Connection_Config
}
interface Routes_Version {
    version?: number
    status?: number
    methods?: Routes_Methods
}
interface Config {
    [index: string]: string | number | boolean | any | Array<string | number | boolean | any>
}
interface Schema_Source {
    [index: string]: any;
}
interface Connection_Config {
    [index: string]: string | number | boolean | any | Array<string | number | boolean | any>
}
interface Routes_Methods {
}


