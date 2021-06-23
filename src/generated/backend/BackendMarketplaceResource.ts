/**
 * BackendMarketplaceResource generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";
import {Marketplace_Collection} from "./Marketplace_Collection";
import {Marketplace_Install} from "./Marketplace_Install";

export default class BackendMarketplaceResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;


    public constructor(baseUrl: string, token: string, httpClient?: AxiosInstance) {

        this.url = baseUrl + "/backend/marketplace";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Marketplace_Collection>}
     */
    public backendActionMarketplaceGetAll(): AxiosPromise<Marketplace_Collection> {
        let params = {
            method: <Method> "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Marketplace_Collection>(this.url, params);
    }

    /**
     * @param {Marketplace_Install} data
     * @returns {AxiosPromise<Marketplace_Install>}
     */
    public backendActionMarketplaceInstall(data?: Marketplace_Install): AxiosPromise<Marketplace_Install> {
        let params = {
            method: <Method> "POST",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.post<Marketplace_Install>(this.url, data, params);
    }

}
