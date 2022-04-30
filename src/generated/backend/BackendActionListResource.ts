/**
 * BackendActionListResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action_Index} from "./Action_Index";

export default class BackendActionListResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/action/list";
    }

    /**
     * @returns {Promise<AxiosResponse<Action_Index>>}
     */
    public async backendActionActionGetIndex(): Promise<AxiosResponse<Action_Index>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<Action_Index>(this.url, params);
    }

}
