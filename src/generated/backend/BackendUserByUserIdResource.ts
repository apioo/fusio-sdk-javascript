/**
 * BackendUserByUserIdResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User} from "./User";
import {User_Update} from "./User_Update";
import {Message} from "./Message";

export default class BackendUserByUserIdResource extends ResourceAbstract {
    private url: string;

    private user_id: string;

    public constructor(user_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.user_id = user_id;

        this.url = baseUrl + "/backend/user/"+user_id+"";
    }

    /**
     * @returns {AxiosPromise<User>}
     */
    public backendActionUserGet(): AxiosPromise<User> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<User>(this.url, params);
    }

    /**
     * @param {User_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionUserUpdate(data?: User_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionUserDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
