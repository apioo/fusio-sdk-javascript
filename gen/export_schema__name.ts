import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private name: string;

    public constructor(name: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.name = name;

        this.url = baseUrl + "/export/schema/"+name+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public get(): AxiosPromise<Export_Schema> {
        let params = {
            method: "GET",
        };

        return this.httpClient.get<Export_Schema>(this.url, params);
    }

}

interface Endpoint {
    Export_Schema?: Export_Schema
}
interface Export_Schema {
    schema?: Export_Schema_JsonSchema
    form?: Export_Schema_Form
}
interface Export_Schema_JsonSchema {
}
interface Export_Schema_Form {
}


