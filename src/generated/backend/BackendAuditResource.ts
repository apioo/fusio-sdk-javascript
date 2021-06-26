/**
 * BackendAuditResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Backend_Audit_Collection_Query} from "./Backend_Audit_Collection_Query";
import {Audit_Collection} from "./Audit_Collection";

export default class BackendAuditResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/audit";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @param {Backend_Audit_Collection_Query} query
     * @returns {AxiosPromise<Audit_Collection>}
     */
    public backendActionAuditGetAll(query?: Backend_Audit_Collection_Query): AxiosPromise<Audit_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Audit_Collection>(this.url, params);
    }

}
