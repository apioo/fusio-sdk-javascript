import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: number;

    public constructor(schema_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/preview/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public post(): AxiosPromise<Schema_Preview_Response> {
        let params = {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Schema_Preview_Response>(this.url, params);
    }

}

interface Endpoint {
    Schema_Preview_Response?: Schema_Preview_Response
}
interface Schema_Preview_Response {
    preview?: string
}


