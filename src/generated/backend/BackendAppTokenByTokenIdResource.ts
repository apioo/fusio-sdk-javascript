/**
 * BackendAppTokenByTokenIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App_Token} from "./App_Token";

export default class BackendAppTokenByTokenIdResource extends ResourceAbstract {
    private url: string;

    private token_id: string;

    public constructor(token_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/token/"+token_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<App_Token>>}
     */
    public async backendActionAppTokenGet(): Promise<AxiosResponse<App_Token>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<App_Token>(this.url, params);
    }

}
