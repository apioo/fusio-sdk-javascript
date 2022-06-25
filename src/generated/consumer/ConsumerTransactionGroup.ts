/**
 * ConsumerTransactionGroup generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerTransactionByTransactionIdResource from "./ConsumerTransactionByTransactionIdResource";
import ConsumerTransactionResource from "./ConsumerTransactionResource";

export default class ConsumerTransactionGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/transaction/$transaction_id<[0-9]+>
     */
    public getConsumerTransactionByTransactionId(transaction_id: string): ConsumerTransactionByTransactionIdResource
    {
        return new ConsumerTransactionByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction
     */
    public getConsumerTransaction(): ConsumerTransactionResource
    {
        return new ConsumerTransactionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
