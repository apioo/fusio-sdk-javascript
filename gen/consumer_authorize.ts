import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/authorize";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Consumer_Authorize_Meta> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Authorize_Meta>(this.url, params);
    }

    public post(data: Consumer_Authorize_Request): AxiosPromise<Consumer_Authorize_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Consumer_Authorize_Response>(this.url, data, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Consumer_Authorize_Meta?: Consumer_Authorize_Meta
    Consumer_Authorize_Request?: Consumer_Authorize_Request
    Consumer_Authorize_Response?: Consumer_Authorize_Response
}
interface GetQuery {
    client_id?: string
    scope?: string
}
interface Consumer_Authorize_Meta {
    name?: string
    url?: string
    scopes?: Array<Consumer_Scope>
}
interface Consumer_Authorize_Request {
    responseType: string
    clientId: string
    redirectUri?: string
    scope: string
    state?: string
    allow: boolean
}
interface Consumer_Authorize_Response {
    type?: string
    token?: Consumer_Authorize_Token
    code?: string
    redirectUri?: string
}
interface Consumer_Scope {
    id?: number
    name?: string
    description?: string
}
interface Consumer_Authorize_Token {
    access_token?: string
    token_type?: string
    expires_in?: string
    scope?: string
}


