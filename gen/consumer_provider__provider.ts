import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private provider: string;

    public constructor(provider: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.provider = provider;

        this.url = baseUrl + "/consumer/provider/"+provider+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Consumer_User_Provider): AxiosPromise<Consumer_User_JWT> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Consumer_User_JWT>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_User_Provider?: Consumer_User_Provider
    Consumer_User_JWT?: Consumer_User_JWT
}
interface Consumer_User_Provider {
    code?: string
    clientId?: string
    redirectUri?: string
    [index: string]: any;
}
interface Consumer_User_JWT {
    token?: string
}


