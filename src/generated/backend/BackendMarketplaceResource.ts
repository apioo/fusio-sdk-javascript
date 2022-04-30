/**
 * BackendMarketplaceResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Marketplace_Collection} from "./Marketplace_Collection";
import {Marketplace_Install} from "./Marketplace_Install";

export default class BackendMarketplaceResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/marketplace";
    }

    /**
     * @returns {AxiosPromise<Marketplace_Collection>}
     */
    public backendActionMarketplaceGetAll(): AxiosPromise<Marketplace_Collection> {
        let params = {
            method: <Method> "GET",
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
        };

        return this.httpClient.post<Marketplace_Install>(this.url, data, params);
    }

}
