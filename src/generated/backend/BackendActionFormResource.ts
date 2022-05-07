/**
 * BackendActionFormResource generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Form_Container} from "./Form_Container";

export default class BackendActionFormResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/action/form";
    }

    /**
     * @returns {Promise<AxiosResponse<Form_Container>>}
     */
    public async backendActionActionGetForm(): Promise<AxiosResponse<Form_Container>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

}
