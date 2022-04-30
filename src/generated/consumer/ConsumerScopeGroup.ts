/**
 * ConsumerScopeGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerScopeResource from "./ConsumerScopeResource";

export default class ConsumerScopeGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/scope
     *
     * @returns ConsumerScopeResource
     */
    public getConsumerScope(): ConsumerScopeResource
    {
        return new ConsumerScopeResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
