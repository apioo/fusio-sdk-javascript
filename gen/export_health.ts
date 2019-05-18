import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/export/health";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Export_Health> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<Export_Health>(this.url, params);
    }

}

interface Endpoint {
    Export_Health?: Export_Health
}
interface Export_Health {
    healthy?: boolean
    checks?: Export_Health_Checks
}
interface Export_Health_Checks {
    [index: string]: Export_Health_Check
}
interface Export_Health_Check {
    healthy?: boolean
    error?: string
}


