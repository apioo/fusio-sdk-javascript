/**
 * ConsumerPageGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPageByPageIdResource from "./ConsumerPageByPageIdResource";
import ConsumerPageResource from "./ConsumerPageResource";

export default class ConsumerPageGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/page/:page_id
     *
     * @returns ConsumerPageByPageIdResource
     */
    public getConsumerPageByPageId(page_id: string): ConsumerPageByPageIdResource
    {
        return new ConsumerPageByPageIdResource(
            page_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/page
     *
     * @returns ConsumerPageResource
     */
    public getConsumerPage(): ConsumerPageResource
    {
        return new ConsumerPageResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
