import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private config_id: number;

    public constructor(config_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.config_id = config_id;

        this.url = baseUrl + "/backend/config/"+config_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Config> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Config>(this.url, params);
    }

    public put(data: Config): AxiosPromise<Message> {
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
    Config?: Config
    Message?: Message
}
interface Config {
    id?: number
    type?: number
    name?: string
    description?: string
    value?: string | number | boolean | any
}
interface Message {
    success?: boolean
    message?: string
}


