/**
 * BackendCronjobByCronjobIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Cronjob} from "./Cronjob";
import {Cronjob_Update} from "./Cronjob_Update";
import {Message} from "./Message";

export default class BackendCronjobByCronjobIdResource extends ResourceAbstract {
    private url: string;

    private cronjob_id: string;

    public constructor(cronjob_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.cronjob_id = cronjob_id;

        this.url = baseUrl + "/backend/cronjob/"+cronjob_id+"";
    }

    /**
     * @returns {AxiosPromise<Cronjob>}
     */
    public backendActionCronjobGet(): AxiosPromise<Cronjob> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Cronjob>(this.url, params);
    }

    /**
     * @param {Cronjob_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCronjobUpdate(data?: Cronjob_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCronjobDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
