import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private contract_id: number;

    public constructor(contract_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.contract_id = contract_id;

        this.url = baseUrl + "/consumer/plan/contract/"+contract_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Consumer_Plan_Contract> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Consumer_Plan_Contract>(this.url, params);
    }

}

interface Endpoint {
    Consumer_Plan_Contract?: Consumer_Plan_Contract
}
interface Consumer_Plan_Contract {
    id?: number
    status?: number
    plan?: Consumer_Plan
    amount?: number
    points?: number
    period?: number
    invoices?: Array<Consumer_Plan_Invoice>
    insertDate?: string
}
interface Consumer_Plan {
    id?: number
    name?: string
    description?: string
    price?: number
    points?: number
}
interface Consumer_Plan_Invoice {
    id?: number
    status?: number
    amount?: number
    points?: number
    payDate?: string
    insertDate?: string
}


