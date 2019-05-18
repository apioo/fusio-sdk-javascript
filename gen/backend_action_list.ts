import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/action/list";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Action_Index> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Action_Index>(this.url, params);
    }

}

interface Endpoint {
    Action_Index?: Action_Index
}
interface Action_Index {
    actions?: Array<Action_Action>
}
interface Action_Action {
    name?: string
    class?: string
}


