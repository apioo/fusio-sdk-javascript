/**
 * BackendConfigResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Query} from "./Collection_Query";
import {Config_Collection} from "./Config_Collection";

export default class BackendConfigResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/config";
    }

    /**
     * @param {Collection_Query} query
     * @returns {AxiosPromise<Config_Collection>}
     */
    public backendActionConfigGetAll(query?: Collection_Query): AxiosPromise<Config_Collection> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Config_Collection>(this.url, params);
    }

}
