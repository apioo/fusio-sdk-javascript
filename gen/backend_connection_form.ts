import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/connection/form";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(query: GetQuery): AxiosPromise<Container> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Container>(this.url, params);
    }

}

interface Endpoint {
    GetQuery?: GetQuery
    Container?: Container
}
interface GetQuery {
    class?: string
}
interface Container {
    element?: Array<Input | Select | Tag | Textarea>
}
interface Input {
    element?: string
    name?: string
    title?: string
    help?: string
    type?: string
}
interface Select {
    element?: string
    name?: string
    title?: string
    help?: string
    options?: Array<Option>
}
interface Tag {
    element?: string
    name?: string
    title?: string
    help?: string
}
interface Textarea {
    element?: string
    name?: string
    title?: string
    help?: string
    mode?: string
}
interface Option {
    key?: string
    value?: string
}


