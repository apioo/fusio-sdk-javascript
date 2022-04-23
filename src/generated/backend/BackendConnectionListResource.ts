/**
 * BackendConnectionListResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Connection_Index} from "./Connection_Index";

export default class BackendConnectionListResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection/list";
    }

    /**
     * @returns {AxiosPromise<Connection_Index>}
     */
    public backendActionConnectionGetIndex(): AxiosPromise<Connection_Index> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Connection_Index>(this.url, params);
    }

}
