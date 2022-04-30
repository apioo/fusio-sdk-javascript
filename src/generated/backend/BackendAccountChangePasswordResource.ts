/**
 * BackendAccountChangePasswordResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Account_ChangePassword} from "./Account_ChangePassword";
import {Message} from "./Message";

export default class BackendAccountChangePasswordResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/account/change_password";
    }

    /**
     * @param {Account_ChangePassword} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionAccountChangePassword(data?: Account_ChangePassword): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
