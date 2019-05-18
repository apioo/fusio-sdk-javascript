import * as ActionCollection from "../../gen/backend_action";
import * as ActionEntity from "../../gen/backend_action__action_id__0_9___";
import * as ActionExecute
    from "../../gen/backend_action_execute__action_id__0_9___";
import * as ActionForm from "../../gen/backend_action_form";
import * as ActionList from "../../gen/backend_action_list";
import {BaseResource} from "../BaseResource";

export class ActionResource extends BaseResource
{
    public collection()
    {
        return new ActionCollection.default(this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new ActionEntity.default(id, this.accessToken, this.httpClient);
    }

    public execute(id: number)
    {
        return new ActionExecute.default(id, this.accessToken, this.httpClient);
    }

    public form()
    {
        return new ActionForm.default(this.accessToken, this.httpClient);
    }

    public list()
    {
        return new ActionList.default(this.accessToken, this.httpClient);
    }
}
