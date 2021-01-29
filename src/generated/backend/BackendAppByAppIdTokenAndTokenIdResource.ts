/**
 * BackendAppByAppIdTokenAndTokenIdResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Message} from "./Message";

export default class BackendAppByAppIdTokenAndTokenIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_id: string;
    private token_id: string;

    public constructor(app_id: string, token_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_id = app_id;
        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/"+app_id+"/token/"+token_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAppDeleteToken(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
