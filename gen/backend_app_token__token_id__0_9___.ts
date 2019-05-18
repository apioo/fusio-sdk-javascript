import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private token_id: number;

    public constructor(token_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/token/"+token_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<App_Token> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Token>(this.url, params);
    }

}

interface Endpoint {
    App_Token?: App_Token
}
interface App_Token {
    id?: number
    token?: string
    scope?: string
    ip?: string
    expire?: string
    date?: string
}


