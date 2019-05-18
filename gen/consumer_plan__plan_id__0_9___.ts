import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private plan_id: number;

    public constructor(plan_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.plan_id = plan_id;

        this.url = baseUrl + "/consumer/plan/"+plan_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Plan> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Plan>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Plan?: Consumer_Plan
}
interface Consumer_Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
}


