/**
 * BackendConnectionByConnectionIdRedirectResource automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdRedirectResource extends ResourceAbstract {
    private url: string;

    private connectionId: string;

    public constructor(connectionId: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connectionId = connectionId;

        this.url = baseUrl + "/backend/connection/"+connectionId+"/redirect";
    }

    /**
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionConnectionGetRedirect(): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Message>(this.url, params);
    }

}
