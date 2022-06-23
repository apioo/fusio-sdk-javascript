/**
 * ConsumerGrantGroup generated on 2022-06-23
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerGrantByGrantIdResource from "./ConsumerGrantByGrantIdResource";
import ConsumerGrantResource from "./ConsumerGrantResource";

export default class ConsumerGrantGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/grant/$grant_id<[0-9]+>
     */
    public getConsumerGrantByGrantId(grant_id: string): ConsumerGrantByGrantIdResource
    {
        return new ConsumerGrantByGrantIdResource(
            grant_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/grant
     */
    public getConsumerGrant(): ConsumerGrantResource
    {
        return new ConsumerGrantResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
