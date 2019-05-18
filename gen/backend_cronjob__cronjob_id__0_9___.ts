import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private cronjob_id: number;

    public constructor(cronjob_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.cronjob_id = cronjob_id;

        this.url = baseUrl + "/backend/cronjob/"+cronjob_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Cronjob> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Cronjob>(this.url, params);
    }

    public put(data: Cronjob): AxiosPromise<Message> {
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
    Cronjob?: Cronjob
    Message?: Message
}
interface Cronjob {
    id?: number
    name?: string
    cron?: string
    action?: number
    executeDate?: string
    exitCode?: number
    errors?: Array<Cronjob_Error>
}
interface Message {
    success?: boolean
    message?: string
}
interface Cronjob_Error {
    message?: string
    trace?: string
    file?: string
    line?: number
}


