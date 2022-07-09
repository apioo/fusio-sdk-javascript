/**
 * BackendMarketplaceResource generated on 2022-07-09
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Marketplace_Collection} from "./Marketplace_Collection";
import {Marketplace_Install} from "./Marketplace_Install";

export default class BackendMarketplaceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/marketplace";
    }

    /**
     * @returns {Promise<AxiosResponse<Marketplace_Collection>>}
     */
    public async backendActionMarketplaceGetAll(): Promise<AxiosResponse<Marketplace_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Marketplace_Collection>(this.url, params);
    }

    /**
     * @param {Marketplace_Install} data
     * @returns {Promise<AxiosResponse<Marketplace_Install>>}
     */
    public async backendActionMarketplaceInstall(data: Marketplace_Install): Promise<AxiosResponse<Marketplace_Install>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Marketplace_Install>(this.url, data, params);
    }

}
