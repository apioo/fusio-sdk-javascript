/**
 * ConsumerPageByPageIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Page} from "./Page";

export default class ConsumerPageByPageIdResource extends ResourceAbstract {
    private url: string;

    private page_id: string;

    public constructor(page_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.page_id = page_id;

        this.url = baseUrl + "/consumer/page/"+page_id+"";
    }

    /**
     * @returns {AxiosPromise<Page>}
     */
    public consumerActionPageGet(): AxiosPromise<Page> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Page>(this.url, params);
    }

}
