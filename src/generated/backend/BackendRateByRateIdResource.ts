/**
 * BackendRateByRateIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Rate} from "./Rate";
import {Rate_Update} from "./Rate_Update";
import {Message} from "./Message";

export default class BackendRateByRateIdResource extends ResourceAbstract {
    private url: string;

    private rate_id: string;

    public constructor(rate_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.rate_id = rate_id;

        this.url = baseUrl + "/backend/rate/"+rate_id+"";
    }

    /**
     * @returns {AxiosPromise<Rate>}
     */
    public backendActionRateGet(): AxiosPromise<Rate> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Rate>(this.url, params);
    }

    /**
     * @param {Rate_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateUpdate(data?: Rate_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionRateDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
