import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private route_id: number;

    public constructor(route_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.route_id = route_id;

        this.url = baseUrl + "/backend/routes/"+route_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Routes> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Routes>(this.url, params);
    }

    public put(data: Routes): AxiosPromise<Message> {
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
    Routes?: Routes
    Message?: Message
}
interface Routes {
    id?: number
    priority?: number
    path?: string
    controller?: string
    scopes?: Array<string>
    config: Array<Routes_Version>
}
interface Message {
    success?: boolean
    message?: string
}
interface Routes_Version {
    version?: number
    status?: number
    methods?: Routes_Methods
}
interface Routes_Methods {
}


