/**
 * ConsumerProviderByProviderResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Provider} from "./User_Provider";
import {User_JWT} from "./User_JWT";

export default class ConsumerProviderByProviderResource extends ResourceAbstract {
    private url: string;

    private provider: string;

    public constructor(provider: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.provider = provider;

        this.url = baseUrl + "/consumer/provider/"+provider+"";
    }

    /**
     * @param {User_Provider} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserProvider(data?: User_Provider): AxiosPromise<User_JWT> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

}
