/**
 * ConsumerAppGroup generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerAppByAppIdResource from "./ConsumerAppByAppIdResource";
import ConsumerAppResource from "./ConsumerAppResource";

export default class ConsumerAppGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/app/$app_id<[0-9]+>
     */
    public getConsumerAppByAppId(app_id: string): ConsumerAppByAppIdResource
    {
        return new ConsumerAppByAppIdResource(
            app_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/app
     */
    public getConsumerApp(): ConsumerAppResource
    {
        return new ConsumerAppResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
