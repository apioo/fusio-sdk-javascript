import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/export/debug";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Export_Debug> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<Export_Debug>(this.url, params);
    }

    public post(data: Passthru): AxiosPromise<Export_Debug> {
        let params = {
            method: "POST",
        };

        return this.httpClient.post<Export_Debug>(this.url, data, params);
    }

    public put(data: Passthru): AxiosPromise<Export_Debug> {
        let params = {
            method: "PUT",
        };

        return this.httpClient.put<Export_Debug>(this.url, data, params);
    }

    public delete(): AxiosPromise<Export_Debug> {
        let params = {
            method: "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

    public patch(data: Passthru): AxiosPromise<Export_Debug> {
        let params = {
            method: "PATCH",
        };

        return this.httpClient.patch<Export_Debug>(this.url, data, params);
    }

}

interface Endpoint {
    Export_Debug?: Export_Debug
    Passthru?: Passthru
}
interface Export_Debug {
    method?: string
    headers?: Export_Debug_Headers
    parameters?: Export_Debug_Parameters
    body?: Export_Debug_Request
}
interface Passthru {
}
interface Export_Debug_Headers {
}
interface Export_Debug_Parameters {
}
interface Export_Debug_Request {
}


