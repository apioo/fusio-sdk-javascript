/**
 * BackendConnectionFormResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Form_Query} from "./Form_Query";
import {Form_Container} from "./Form_Container";

export default class BackendConnectionFormResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection/form";
    }

    /**
     * @param {Form_Query} query
     * @returns {Promise<AxiosResponse<Form_Container>>}
     */
    public async backendActionConnectionGetForm(query?: Form_Query): Promise<AxiosResponse<Form_Container>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

}
