/**
 * BackendAppByAppIdTokenAndTokenIdResource generated on 2022-07-18
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Message} from "./Message";

export default class BackendAppByAppIdTokenAndTokenIdResource extends ResourceAbstract {
    private url: string;

    private app_id: string;
    private token_id: string;

    public constructor(app_id: string, token_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.app_id = app_id;
        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/"+app_id+"/token/"+token_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionAppDeleteToken(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
