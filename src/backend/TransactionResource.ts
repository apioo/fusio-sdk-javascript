import * as TransactionCollection from "../../gen/backend_transaction";
import * as TransactionEntity
    from "../../gen/backend_transaction__transaction_id__0_9___";
import {BaseResource} from "../BaseResource";

export class TransactionResource extends BaseResource
{
    public collection()
    {
        return new TransactionCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new TransactionEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
