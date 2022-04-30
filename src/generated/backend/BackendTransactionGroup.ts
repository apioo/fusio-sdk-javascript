/**
 * BackendTransactionGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendTransactionByTransactionIdResource from "./BackendTransactionByTransactionIdResource";
import BackendTransactionResource from "./BackendTransactionResource";

export default class BackendTransactionGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/transaction/$transaction_id<[0-9]+>
     *
     * @returns BackendTransactionByTransactionIdResource
     */
    public getBackendTransactionByTransactionId(transaction_id: string): BackendTransactionByTransactionIdResource
    {
        return new BackendTransactionByTransactionIdResource(
            transaction_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/transaction
     *
     * @returns BackendTransactionResource
     */
    public getBackendTransaction(): BackendTransactionResource
    {
        return new BackendTransactionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
