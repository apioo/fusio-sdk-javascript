/**
 * ConsumerPageGroup generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerPageByPageIdResource from "./ConsumerPageByPageIdResource";
import ConsumerPageResource from "./ConsumerPageResource";

export default class ConsumerPageGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/page/:page_id
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
     */
    public getConsumerPage(): ConsumerPageResource
    {
        return new ConsumerPageResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
