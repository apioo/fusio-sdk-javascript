/**
 * BackendAccountResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User} from "./User";
import {User_Update} from "./User_Update";
import {Message} from "./Message";

export default class BackendAccountResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/account";
    }

    /**
     * @returns {AxiosPromise<User>}
     */
    public backendActionAccountGet(): AxiosPromise<User> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<User>(this.url, params);
    }

    /**
     * @param {User_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAccountUpdate(data?: User_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
