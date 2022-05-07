/**
 * ConsumerEventGroup generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerEventResource from "./ConsumerEventResource";

export default class ConsumerEventGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/event
     */
    public getConsumerEvent(): ConsumerEventResource
    {
        return new ConsumerEventResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
