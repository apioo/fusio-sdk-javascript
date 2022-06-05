/**
 * ConsumerProviderByProviderResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Provider} from "./User_Provider";
import {User_JWT} from "./User_JWT";

export default class ConsumerProviderByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/provider/"+provider+"";
    }

    /**
     * @param {User_Provider} data
     * @returns {Promise<AxiosResponse<User_JWT>>}
     */
    public async consumerActionUserProvider(data: User_Provider): Promise<AxiosResponse<User_JWT>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

}
