/**
 * ConsumerTransactionGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import ConsumerTransactionByTransactionIdResource from "./ConsumerTransactionByTransactionIdResource";
import ConsumerTransactionPrepareByProviderResource from "./ConsumerTransactionPrepareByProviderResource";
import ConsumerTransactionExecuteByTransactionIdResource from "./ConsumerTransactionExecuteByTransactionIdResource";
import ConsumerTransactionResource from "./ConsumerTransactionResource";

export default class ConsumerTransactionGroup extends ResourceAbstract {
    /**
     * Endpoint: /consumer/transaction/$transaction_id<[0-9]+>
     *
     * @returns ConsumerTransactionByTransactionIdResource
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
     * Endpoint: /consumer/transaction/prepare/:provider
     *
     * @returns ConsumerTransactionPrepareByProviderResource
     */
    public getConsumerTransactionPrepareByProvider(provider: string): ConsumerTransactionPrepareByProviderResource
    {
        return new ConsumerTransactionPrepareByProviderResource(
            provider,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction/execute/:transaction_id
     *
     * @returns ConsumerTransactionExecuteByTransactionIdResource
     */
    public getConsumerTransactionExecuteByTransactionId(transaction_id: string): ConsumerTransactionExecuteByTransactionIdResource
    {
        return new ConsumerTransactionExecuteByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /consumer/transaction
     *
     * @returns ConsumerTransactionResource
     */
    public getConsumerTransaction(): ConsumerTransactionResource
    {
        return new ConsumerTransactionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
