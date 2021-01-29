/**
 * BackendMarketplaceByAppNameResource generated on 2021-01-29
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise} from "axios";
import {Marketplace_Local_App} from "./Marketplace_Local_App";
import {Message} from "./Message";

export default class BackendMarketplaceByAppNameResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private app_name: string;

    public constructor(app_name: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.app_name = app_name;

        this.url = baseUrl + "/backend/marketplace/"+app_name+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<Marketplace_Local_App>}
     */
    public backendActionMarketplaceGet(): AxiosPromise<Marketplace_Local_App> {
        let params = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.get<Marketplace_Local_App>(this.url, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionMarketplaceUpdate(): AxiosPromise<Message> {
        let params = {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.put<Message>(this.url, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionMarketplaceRemove(): AxiosPromise<Message> {
        let params = {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
