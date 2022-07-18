/**
 * BackendTrashResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Trash_Types} from "./Trash_Types";

export default class BackendTrashResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/trash";
    }

    /**
     * @returns {Promise<AxiosResponse<Trash_Types>>}
     */
    public async backendActionTrashGetTypes(): Promise<AxiosResponse<Trash_Types>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Trash_Types>(this.url, params);
    }

}
