import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/dashboard";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Dashboard> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Dashboard>(this.url, params);
    }

}

interface Endpoint {
    Dashboard?: Dashboard
}
interface Dashboard {
    errorsPerRoute?: Statistic_Chart
    incomingRequests?: Statistic_Chart
    incomingTransactions?: Statistic_Chart
    mostUsedRoutes?: Statistic_Chart
    timePerRoute?: Statistic_Chart
    latestApps?: Dashboard_Apps
    latestRequests?: Dashboard_Requests
    latestUsers?: Dashboard_Users
    latestTransactions?: Dashboard_Transactions
}
interface Statistic_Chart {
    labels?: Array<string>
    data?: Array<Array<number>>
    series?: Array<string>
}
interface Dashboard_Apps {
    entry?: Array<Dashboard_App>
}
interface Dashboard_Requests {
    entry?: Array<Dashboard_Request>
}
interface Dashboard_Users {
    entry?: Array<Dashboard_User>
}
interface Dashboard_Transactions {
    entry?: Array<Dashboard_Transaction>
}
interface Dashboard_App {
    name?: string
    date?: string
}
interface Dashboard_Request {
    path?: string
    ip?: string
    date?: string
}
interface Dashboard_User {
    status?: number
    name?: string
    date?: string
}
interface Dashboard_Transaction {
    status?: string
    provider?: string
    transactionId?: string
    amount?: number
    date?: string
}


