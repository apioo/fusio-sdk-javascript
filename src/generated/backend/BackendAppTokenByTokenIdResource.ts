/**
 * BackendAppTokenByTokenIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {App_Token} from "./App_Token";

export default class BackendAppTokenByTokenIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private token_id: string;

    public constructor(token_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/token/"+token_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<App_Token>}
     */
    public backendActionAppTokenGet(): AxiosPromise<App_Token> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Token>(this.url, params);
    }

}
