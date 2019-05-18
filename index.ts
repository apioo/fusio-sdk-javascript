import Axios from "axios";
import {Backend} from "./src/Backend";
import {Consumer} from "./src/Consumer";
import {Meta} from "./src/Meta";
import {Authorization} from "./src/Authorization";

interface Options
{
    baseUrl: string
    accessToken: string
}

export class Fusio
{
    public static auth: Authorization;
    public static backend: Backend;
    public static consumer: Consumer;
    public static meta: Meta;

    public static init(options: Options)
    {
        let baseUrl = options.baseUrl;
        let accessToken = options.accessToken;
        let httpClient = Axios.create();

        this.auth = new Authorization(baseUrl, accessToken, httpClient);
        this.backend = new Backend(baseUrl, accessToken, httpClient);
        this.consumer = new Consumer(baseUrl, accessToken, httpClient);
        this.meta = new Meta(baseUrl, accessToken, httpClient);
    }
}

