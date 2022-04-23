/**
 * ConsumerAuthorizeResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Authorize_Meta} from "./Authorize_Meta";
import {Authorize_Request} from "./Authorize_Request";
import {Authorize_Response} from "./Authorize_Response";

export default class ConsumerAuthorizeResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/authorize";
    }

    /**
     * @returns {AxiosPromise<Authorize_Meta>}
     */
    public consumerActionUserGetApp(): AxiosPromise<Authorize_Meta> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Authorize_Meta>(this.url, params);
    }

    /**
     * @param {Authorize_Request} data
     * @returns {AxiosPromise<Authorize_Response>}
     */
    public consumerActionUserAuthorize(data?: Authorize_Request): AxiosPromise<Authorize_Response> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Authorize_Response>(this.url, data, params);
    }

}
