import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private action_id: number;

    public constructor(action_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/execute/"+action_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Action_Request): AxiosPromise<Action_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Action_Response>(this.url, data, params);
    }

}

interface Endpoint {
    Action_Request?: Action_Request
    Action_Response?: Action_Response
}
interface Action_Request {
    method: string
    uriFragments?: string
    parameters?: string
    headers?: string
    body?: Action_Request_Body
}
interface Action_Response {
    statusCode?: number
    headers?: Action_Response_Headers
    body?: Action_Response_Body
}
interface Action_Request_Body {
    [index: string]: any;
}
interface Action_Response_Headers {
    [index: string]: string
}
interface Action_Response_Body {
    [index: string]: any;
}


