import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private audit_id: number;

    public constructor(audit_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.audit_id = audit_id;

        this.url = baseUrl + "/backend/audit/"+audit_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Audit> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Audit>(this.url, params);
    }

}

interface Endpoint {
    Audit?: Audit
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


