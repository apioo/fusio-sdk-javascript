/**
 * ConsumerLogGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerLogByLogIdResource from "./ConsumerLogByLogIdResource";
import ConsumerLogResource from "./ConsumerLogResource";

export default class ConsumerLogGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/log/$log_id<[0-9]+>
     *
     * @returns ConsumerLogByLogIdResource
     */
    public getConsumerLogByLogId(log_id: string): ConsumerLogByLogIdResource
    {
        return new ConsumerLogByLogIdResource(
            log_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/log
     *
     * @returns ConsumerLogResource
     */
    public getConsumerLog(): ConsumerLogResource
    {
        return new ConsumerLogResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
