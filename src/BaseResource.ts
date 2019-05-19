import {AxiosInstance} from "axios";

export class BaseResource {
    protected baseUrl: string;
    protected accessToken: string;
    protected httpClient: AxiosInstance;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
        this.httpClient = httpClient;
    }

    public setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
    }

    public setHttpClient(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }
}
