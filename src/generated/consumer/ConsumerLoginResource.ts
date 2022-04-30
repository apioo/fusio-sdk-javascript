/**
 * ConsumerLoginResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Login} from "./User_Login";
import {User_JWT} from "./User_JWT";
import {User_Refresh} from "./User_Refresh";

export default class ConsumerLoginResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/login";
    }

    /**
     * @param {User_Login} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserLogin(data?: User_Login): AxiosPromise<User_JWT> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<User_JWT>(this.url, data, params);
    }

    /**
     * @param {User_Refresh} data
     * @returns {AxiosPromise<User_JWT>}
     */
    public consumerActionUserRefresh(data?: User_Refresh): AxiosPromise<User_JWT> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<User_JWT>(this.url, data, params);
    }

}
