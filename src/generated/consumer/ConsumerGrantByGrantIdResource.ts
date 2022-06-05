/**
 * ConsumerGrantByGrantIdResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"

export default class ConsumerGrantByGrantIdResource extends ResourceAbstract {
    private url: string;

    private grant_id: string;

    public constructor(grant_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.grant_id = grant_id;

        this.url = baseUrl + "/consumer/grant/"+grant_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<void>>}
     */
    public async consumerActionGrantDelete(): Promise<AxiosResponse<void>> {
        let params: AxiosRequestConfig = {
            method: 'DELETE',
        };

        return this.httpClient.delete(this.url, params);
    }

}
