import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_id: number;
    private token_id: number;

    public constructor(app_id: number, token_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_id = app_id;
        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/"+app_id+"/token/"+token_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public delete(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}

interface Endpoint {
    Message?: Message
}
interface Message {
    success?: boolean
    message?: string
}


