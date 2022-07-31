/**
 * ConsumerLogGroup automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerLogByLogIdResource from "./ConsumerLogByLogIdResource";
import ConsumerLogResource from "./ConsumerLogResource";

export default class ConsumerLogGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/log/$log_id<[0-9]+>
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
     */
    public getConsumerLog(): ConsumerLogResource
    {
        return new ConsumerLogResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
