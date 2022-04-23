/**
 * BackendDashboardResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Dashboard} from "./Dashboard";

export default class BackendDashboardResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/dashboard";
    }

    /**
     * @returns {AxiosPromise<Dashboard>}
     */
    public backendActionDashboardGetAll(): AxiosPromise<Dashboard> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Dashboard>(this.url, params);
    }

}
