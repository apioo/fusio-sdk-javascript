import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/account";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_User_Account> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_User_Account>(this.url, params);
    }

    public put(data: Consumer_User_Account): AxiosPromise<Consumer_Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Consumer_Message>(this.url, data, params);
    }

}

interface Endpoint {
    Consumer_User_Account?: Consumer_User_Account
    Consumer_Message?: Consumer_Message
}
interface Consumer_User_Account {
    id?: number
    status?: number
    name?: string
    email?: string
    points?: number
    scopes?: Array<string>
    attributes?: Consumer_User_Attributes
    date?: string
}
interface Consumer_Message {
    success?: boolean
    message?: string
}
interface Consumer_User_Attributes {
    [index: string]: string
}


