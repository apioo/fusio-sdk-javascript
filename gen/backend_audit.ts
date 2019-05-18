import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/audit";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Audit_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Audit_Collection>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Audit_Collection?: Audit_Collection
}
interface GetQuery {
    startIndex?: number
    count?: number
    from?: string
    to?: string
    appId?: number
    userId?: number
    event?: string
    ip?: string
    message?: string
    search?: string
}
interface Audit_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Audit>
}
interface Audit {
    id?: number
    app?: Audit_App
    user?: Audit_User
    event?: string
    ip?: string
    message?: string
    content?: Audit_Object
    date?: string
}
interface Audit_App {
    id?: number
    status?: number
    name?: string
}
interface Audit_User {
    id?: number
    status?: number
    name?: string
}
interface Audit_Object {
}


