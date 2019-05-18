import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private action_id: number;

    public constructor(action_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.action_id = action_id;

        this.url = baseUrl + "/backend/action/"+action_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Action> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Action>(this.url, params);
    }

    public put(data: Action): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
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
    Action?: Action
    Message?: Message
}
interface Action {
    id?: number
    status?: number
    name?: string
    class?: string
    engine?: string
    config?: Config
}
interface Message {
    success?: boolean
    message?: string
}
interface Config {
    [index: string]: string | number | boolean | any | Array<string | number | boolean | any>
}


