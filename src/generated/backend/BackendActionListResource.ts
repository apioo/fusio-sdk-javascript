/**
 * BackendActionListResource generated on 2022-06-25
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
        };

        return this.httpClient.get<Action_Index>(this.url, params);
    }

}
