/**
 * BackendDashboardResource generated on 2022-07-31
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Dashboard} from "./Dashboard";

export default class BackendDashboardResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/dashboard";
    }

    /**
     * @returns {Promise<AxiosResponse<Dashboard>>}
     */
    public async backendActionDashboardGetAll(): Promise<AxiosResponse<Dashboard>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Dashboard>(this.url, params);
    }

}
