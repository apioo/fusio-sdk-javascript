/**
 * BackendGeneratorResource generated on 2022-07-26
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Generator_Index_Providers} from "./Generator_Index_Providers";

export default class BackendGeneratorResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/generator";
    }

    /**
     * @returns {Promise<AxiosResponse<Generator_Index_Providers>>}
     */
    public async backendActionGeneratorIndex(): Promise<AxiosResponse<Generator_Index_Providers>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Generator_Index_Providers>(this.url, params);
    }

}
