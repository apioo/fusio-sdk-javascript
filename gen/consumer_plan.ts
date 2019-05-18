import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/consumer/plan";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Plan_Collection> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Plan_Collection>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Plan_Collection?: Consumer_Plan_Collection
}
interface Consumer_Plan_Collection {
    totalResults?: number
    startIndex?: number
    entry?: Array<Consumer_Plan>
}
interface Consumer_Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
}


