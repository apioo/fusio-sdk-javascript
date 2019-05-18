import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/grant";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Grant_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Grant_Collection>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Grant_Collection?: Consumer_Grant_Collection
}
interface Consumer_Grant_Collection {
    entry?: Array<Consumer_App_Grant>
}
interface Consumer_App_Grant {
    id?: number
    app?: Consumer_App
    createDate?: string
}
interface Consumer_App {
    id?: number
    userId?: number
    status?: number
    name?: string
    url?: string
    appKey?: string
    appSecret?: string
    date?: string
    scopes?: Array<string>
}


