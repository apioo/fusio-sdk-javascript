import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/login";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Consumer_User_Login): AxiosPromise<Consumer_User_JWT> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Consumer_User_JWT>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_User_Login?: Consumer_User_Login
    Consumer_User_JWT?: Consumer_User_JWT
}
interface Consumer_User_Login {
    username?: string
    password?: string
    scopes?: Array<string>
}
interface Consumer_User_JWT {
    token?: string
}


