import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/account/change_password";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public put(data: Consumer_User_Credentials): AxiosPromise<Consumer_Message> {
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
    Consumer_User_Credentials?: Consumer_User_Credentials
    Consumer_Message?: Consumer_Message
}
interface Consumer_User_Credentials {
    oldPassword?: string
    newPassword?: string
    verifyPassword?: string
}
interface Consumer_Message {
    success?: boolean
    message?: string
}


