import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private error_id: number;

    public constructor(error_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.error_id = error_id;

        this.url = baseUrl + "/backend/log/error/"+error_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Log_Error> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Log_Error>(this.url, params);
    }

}

interface Endpoint {
    Log_Error?: Log_Error
}
interface Log_Error {
    message?: string
    trace?: string
    file?: string
    line?: number
}


