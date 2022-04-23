/**
 * ConsumerGrantByGrantIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"

export default class ConsumerGrantByGrantIdResource extends ResourceAbstract {
    private url: string;

    private grant_id: string;

    public constructor(grant_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.grant_id = grant_id;

        this.url = baseUrl + "/consumer/grant/"+grant_id+"";
    }

    /**
     * @returns {AxiosPromise<void>}
     */
    public consumerActionGrantDelete() {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
