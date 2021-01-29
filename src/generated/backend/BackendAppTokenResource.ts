/**
 * BackendAppTokenResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Backend_App_Token_Collection_Query} from "./Backend_App_Token_Collection_Query";
import {App_Token_Collection} from "./App_Token_Collection";

export default class BackendAppTokenResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/app/token";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Backend_App_Token_Collection_Query} query
     * @returns {AxiosPromise<App_Token_Collection>}
     */
    public backendActionAppTokenGetAll(query?: Backend_App_Token_Collection_Query): AxiosPromise<App_Token_Collection> {
        let params = {
            method: "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<App_Token_Collection>(this.url, params);
    }

}
