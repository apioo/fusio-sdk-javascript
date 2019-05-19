import Axios, {AxiosInstance} from "axios";
import {Backend} from "./src/Backend";
import {Consumer} from "./src/Consumer";
import {Meta} from "./src/Meta";
import {Authorization} from "./src/Authorization";

interface Options
{
    baseUrl: string
    accessToken?: string
}

export class Fusio
{
    public static auth: Authorization;
    public static backend: Backend;
    public static consumer: Consumer;
    public static meta: Meta;

    /**
     * Initializes the Fusio SDK
     * 
     * @param options
     */
    public static init(options: Options)
    {
        let baseUrl = options.baseUrl;
        let accessToken = options.accessToken ? options.accessToken : "";
        let httpClient = Axios.create();

        this.auth = new Authorization(baseUrl, accessToken, httpClient);
        this.backend = new Backend(baseUrl, accessToken, httpClient);
        this.consumer = new Consumer(baseUrl, accessToken, httpClient);
        this.meta = new Meta(baseUrl, accessToken, httpClient);
    }

    public static setBaseUrl(baseUrl: string)
    {
        if (!Fusio.auth) {
            throw new Error('SDK not initialized, you need to call the init method previously');
        }

        Fusio.auth.setBaseUrl(baseUrl);
        Fusio.backend.setBaseUrl(baseUrl);
        Fusio.consumer.setBaseUrl(baseUrl);
        Fusio.meta.setBaseUrl(baseUrl);
    }

    public static setAccessToken(accessToken: string)
    {
        if (!Fusio.auth) {
            throw new Error('SDK not initialized, you need to call the init method previously');
        }

        Fusio.auth.setAccessToken(accessToken);
        Fusio.backend.setAccessToken(accessToken);
        Fusio.consumer.setAccessToken(accessToken);
        Fusio.meta.setAccessToken(accessToken);
    }

    public static setHttpClient(httpClient: AxiosInstance)
    {
        if (!Fusio.auth) {
            throw new Error('SDK not initialized, you need to call the init method previously');
        }

        Fusio.auth.setHttpClient(httpClient);
        Fusio.backend.setHttpClient(httpClient);
        Fusio.consumer.setHttpClient(httpClient);
        Fusio.meta.setHttpClient(httpClient);
    }
}

