import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/authorization/revoke";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(): AxiosPromise<Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Message>(this.url, params);
    }

}

interface Endpoint {
    Message?: Message
}
interface Message {
    success?: boolean
    message?: string
}


