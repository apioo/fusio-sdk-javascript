/**
 * ConsumerAppByAppIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App} from "./App";
import {App_Update} from "./App_Update";
import {Message} from "./Message";

export default class ConsumerAppByAppIdResource extends ResourceAbstract {
    private url: string;

    private app_id: string;

    public constructor(app_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_id = app_id;

        this.url = baseUrl + "/consumer/app/"+app_id+"";
    }

    /**
     * @returns {AxiosPromise<App>}
     */
    public consumerActionAppGet(): AxiosPromise<App> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<App>(this.url, params);
    }

    /**
     * @param {App_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionAppUpdate(data?: App_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionAppDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
