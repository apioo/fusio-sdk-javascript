import {AxiosInstance} from "axios";

export class BaseResource
{
    protected baseUrl: string;
    protected accessToken: string;
    protected httpClient: AxiosInstance;

    public constructor(baseUrl: string, accessToken: string, httpClient: AxiosInstance)
    {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
        this.httpClient = httpClient;
    }
}
