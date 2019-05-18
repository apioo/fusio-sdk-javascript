import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private schema_id: number;

    public constructor(schema_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.schema_id = schema_id;

        this.url = baseUrl + "/backend/schema/form/"+schema_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public put(data: Schema_Form): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}

interface Endpoint {
    Schema_Form?: Schema_Form
    Message?: Message
}
interface Schema_Form {
    [index: string]: any;
}
interface Message {
    success?: boolean
    message?: string
}


