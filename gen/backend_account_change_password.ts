import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/account/change_password";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public put(data: Account_Credentials): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}

interface Endpoint {
    Account_Credentials?: Account_Credentials
    Message?: Message
}
interface Account_Credentials {
    oldPassword: string
    newPassword: string
    verifyPassword: string
}
interface Message {
    success?: boolean
    message?: string
}


