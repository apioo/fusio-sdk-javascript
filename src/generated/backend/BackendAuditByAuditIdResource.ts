/**
 * BackendAuditByAuditIdResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Audit} from "./Audit";

export default class BackendAuditByAuditIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private audit_id: string;

    public constructor(audit_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.audit_id = audit_id;

        this.url = baseUrl + "/backend/audit/"+audit_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Audit>}
     */
    public backendActionAuditGet(): AxiosPromise<Audit> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Audit>(this.url, params);
    }

}
