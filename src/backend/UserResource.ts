import * as UserCollection from "../../gen/backend_user";
import * as UserEntity from "../../gen/backend_user__user_id__0_9___";
import {BaseResource} from "../BaseResource";

export class UserResource extends BaseResource
{
    public collection()
    {
        return new UserCollection.default(this.baseUrl, this.accessToken, this.httpClient);
    }

    public entity(id: number)
    {
        return new UserEntity.default(id, this.baseUrl, this.accessToken, this.httpClient);
    }
}
