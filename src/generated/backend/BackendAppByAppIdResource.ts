/**
 * BackendAppByAppIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App} from "./App";
import {App_Update} from "./App_Update";
import {Message} from "./Message";

export default class BackendAppByAppIdResource extends ResourceAbstract {
    private url: string;

    private app_id: string;

    public constructor(app_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_id = app_id;

        this.url = baseUrl + "/backend/app/"+app_id+"";
    }

    /**
     * @returns {AxiosPromise<App>}
     */
    public backendActionAppGet(): AxiosPromise<App> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<App>(this.url, params);
    }

    /**
     * @param {App_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAppUpdate(data?: App_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAppDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
