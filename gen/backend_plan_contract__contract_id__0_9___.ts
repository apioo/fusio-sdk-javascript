import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private contract_id: number;

    public constructor(contract_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.contract_id = contract_id;

        this.url = baseUrl + "/backend/plan/contract/"+contract_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Plan_Contract> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Plan_Contract>(this.url, params);
    }

    public put(data: Plan_Contract): AxiosPromise<Message> {
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
    Plan_Contract?: Plan_Contract
    Message?: Message
}
interface Plan_Contract {
    id?: number
    user?: Plan_User
    plan?: Plan
    status?: number
    amount?: number
    points?: number
    period?: number
    insertDate?: string
}
interface Message {
    success?: boolean
    message?: string
}
interface Plan_User {
    id?: number
    name?: string
}
interface Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
    period?: number
}


