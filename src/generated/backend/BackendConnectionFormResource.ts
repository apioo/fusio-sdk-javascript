/**
 * BackendConnectionFormResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Form_Container} from "./Form_Container";

export default class BackendConnectionFormResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/connection/form";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Form_Container>}
     */
    public backendActionConnectionGetForm(): AxiosPromise<Form_Container> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

}
