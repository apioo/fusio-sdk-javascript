/**
 * ConsumerPageByPageIdResource generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Page} from "./Page";

export default class ConsumerPageByPageIdResource extends ResourceAbstract {
    private url: string;

    private page_id: string;

    public constructor(page_id: string, baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);

        this.page_id = page_id;

        this.url = baseUrl + "/consumer/page/"+page_id+"";
    }

    /**
     * @returns {Promise<AxiosResponse<Page>>}
     */
    public async consumerActionPageGet(): Promise<AxiosResponse<Page>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
        };

        return this.httpClient.get<Page>(this.url, params);
    }

}
