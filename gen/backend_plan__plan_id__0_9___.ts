import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private plan_id: number;

    public constructor(plan_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.plan_id = plan_id;

        this.url = baseUrl + "/backend/plan/"+plan_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Plan> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan>(this.url, params);
    }

    public put(data: Plan): AxiosPromise<Message> {
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
    Plan?: Plan
    Message?: Message
}
interface Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
    period?: number
}
interface Message {
    success?: boolean
    message?: string
}


