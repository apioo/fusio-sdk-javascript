/**
 * ConsumerScopeGroup generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerScopeResource from "./ConsumerScopeResource";

export default class ConsumerScopeGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/scope
     */
    public getConsumerScope(): ConsumerScopeResource
    {
        return new ConsumerScopeResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
