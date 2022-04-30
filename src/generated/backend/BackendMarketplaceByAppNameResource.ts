/**
 * BackendMarketplaceByAppNameResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Marketplace_Local_App} from "./Marketplace_Local_App";
import {Message} from "./Message";

export default class BackendMarketplaceByAppNameResource extends ResourceAbstract {
    private url: string;

    private app_name: string;

    public constructor(app_name: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_name = app_name;

        this.url = baseUrl + "/backend/marketplace/"+app_name+"";
    }

    /**
     * @returns {AxiosPromise<Marketplace_Local_App>}
     */
    public backendActionMarketplaceGet(): AxiosPromise<Marketplace_Local_App> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Marketplace_Local_App>(this.url, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionMarketplaceUpdate(): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, null, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionMarketplaceRemove(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
