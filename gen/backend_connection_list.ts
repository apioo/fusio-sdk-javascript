import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/connection/list";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Connection_Index> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Connection_Index>(this.url, params);
    }

}

interface Endpoint {
    Connection_Index?: Connection_Index
}
interface Connection_Index {
    connections?: Array<Connection_Connection>
}
interface Connection_Connection {
    name?: string
    class?: string
}


