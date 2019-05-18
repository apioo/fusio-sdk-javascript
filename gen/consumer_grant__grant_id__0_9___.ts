import Axios, {AxiosInstance, AxiosPromise} from "axios";

export default class Resource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private grant_id: number;

    public constructor(grant_id: number, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.grant_id = grant_id;

        this.url = baseUrl + "/consumer/grant/"+grant_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    public delete() {
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
}


