/**
 * BackendAuditByAuditIdResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Audit} from "./Audit";

export default class BackendAuditByAuditIdResource extends ResourceAbstract {
    private url: string;

    private auditId: string;

    public constructor(auditId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.auditId = auditId;

        this.url = baseUrl + "/backend/audit/"+auditId+"";
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
