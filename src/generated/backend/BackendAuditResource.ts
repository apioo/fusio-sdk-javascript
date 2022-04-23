/**
 * BackendAuditResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Audit_Collection_Query} from "./Backend_Audit_Collection_Query";
import {Audit_Collection} from "./Audit_Collection";

export default class BackendAuditResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/audit";
    }

    /**
     * @param {Backend_Audit_Collection_Query} query
     * @returns {AxiosPromise<Audit_Collection>}
     */
    public backendActionAuditGetAll(query?: Backend_Audit_Collection_Query): AxiosPromise<Audit_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Audit_Collection>(this.url, params);
    }

}
