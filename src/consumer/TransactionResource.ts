import * as TransactionCollection from "../../gen/consumer_transaction";
import * as TransactionEntity
    from "../../gen/consumer_transaction__transaction_id__0_9___";
import * as TransactionExecute
    from "../../gen/consumer_transaction_execute__transaction_id";
import * as TransactionPrepare
    from "../../gen/consumer_transaction_prepare__provider";
import {BaseResource} from "../BaseResource";

export class TransactionResource extends BaseResource
{
    public collection()
    {
        return new TransactionCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new TransactionEntity.default(id, this.accessToken, this.httpClient);
    }
    
    public execute(transactionId: string)
    {
        return new TransactionExecute.default(transactionId, this.accessToken, this.httpClient);
    }

    public prepare(provider: string)
    {
        return new TransactionPrepare.default(provider, this.accessToken, this.httpClient);
    }
}
