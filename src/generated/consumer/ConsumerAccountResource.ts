/**
 * ConsumerAccountResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Account} from "./User_Account";
import {Message} from "./Message";

export default class ConsumerAccountResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/account";
    }

    /**
     * @returns {AxiosPromise<User_Account>}
     */
    public consumerActionUserGet(): AxiosPromise<User_Account> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<User_Account>(this.url, params);
    }

    /**
     * @param {User_Account} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserUpdate(data?: User_Account): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

}
