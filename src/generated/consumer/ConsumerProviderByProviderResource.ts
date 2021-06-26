/**
 * ConsumerProviderByProviderResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {User_Provider} from "./User_Provider";
import {User_JWT} from "./User_JWT";

export default class ConsumerProviderByProviderResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private provider: string;

    public constructor(provider: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.provider = provider;

        this.url = baseUrl + "/consumer/provider/"+provider+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {User_Provider} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserProvider(data?: User_Provider): AxiosPromise<User_JWT> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

}
