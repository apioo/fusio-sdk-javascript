import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/activate";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(data: Consumer_User_Activate): AxiosPromise<Consumer_Message> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Consumer_Message>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_User_Activate?: Consumer_User_Activate
    Consumer_Message?: Consumer_Message
}
interface Consumer_User_Activate {
    token: string
}
interface Consumer_Message {
    success?: boolean
    message?: string
}


