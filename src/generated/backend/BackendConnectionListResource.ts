/**
 * BackendConnectionListResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Connection_Index} from "./Connection_Index";

export default class BackendConnectionListResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection/list";
    }

    /**
     * @returns {Promise<AxiosResponse<Connection_Index>>}
     */
    public async backendActionConnectionGetIndex(): Promise<AxiosResponse<Connection_Index>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Connection_Index>(this.url, params);
    }

}
