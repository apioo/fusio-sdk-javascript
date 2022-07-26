/**
 * BackendAuditByAuditIdResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Audit} from "./Audit";

export default class BackendAuditByAuditIdResource extends ResourceAbstract {
    private url: string;

    private audit_id: string;

    public constructor(audit_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.audit_id = audit_id;

        this.url = baseUrl + "/backend/audit/"+audit_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Audit>>}
     */
    public async backendActionAuditGet(): Promise<AxiosResponse<Audit>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Audit>(this.url, params);
    }

}
