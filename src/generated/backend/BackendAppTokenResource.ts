/**
 * BackendAppTokenResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_App_Token_Collection_Query} from "./Backend_App_Token_Collection_Query";
import {App_Token_Collection} from "./App_Token_Collection";

export default class BackendAppTokenResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/app/token";
    }

    /**
     * @param {Backend_App_Token_Collection_Query} query
     * @returns {Promise<AxiosResponse<App_Token_Collection>>}
     */
    public async backendActionAppTokenGetAll(query?: Backend_App_Token_Collection_Query): Promise<AxiosResponse<App_Token_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
            responseType: 'json',
            headers: {
                Accept: 'application/json',
            },
        };

        return this.httpClient.get<App_Token_Collection>(this.url, params);
    }

}
