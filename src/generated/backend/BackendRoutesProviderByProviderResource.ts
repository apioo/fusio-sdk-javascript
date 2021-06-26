/**
 * BackendRoutesProviderByProviderResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Form_Container} from "./Form_Container";
import {Route_Provider} from "./Route_Provider";
import {Message} from "./Message";
import {Route_Provider_Config} from "./Route_Provider_Config";
import {Route_Provider_Changelog} from "./Route_Provider_Changelog";

export default class BackendRoutesProviderByProviderResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private provider: string;

    public constructor(provider: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.provider = provider;

        this.url = baseUrl + "/backend/routes/provider/"+provider+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Form_Container>}
     */
    public backendActionRouteProviderForm(): AxiosPromise<Form_Container> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

    /**
     * @param {Route_Provider} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRouteProviderCreate(data?: Route_Provider): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

    /**
     * @param {Route_Provider_Config} data
     * @returns {AxiosPromise<Route_Provider_Changelog>}
     */
    public backendActionRouteProviderChangelog(data?: Route_Provider_Config): AxiosPromise<Route_Provider_Changelog> {
        let params = {
            method: <Method> "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Route_Provider_Changelog>(this.url, data, params);
    }

}
