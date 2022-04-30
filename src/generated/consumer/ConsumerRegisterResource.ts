/**
 * ConsumerRegisterResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Register} from "./User_Register";
import {Message} from "./Message";

export default class ConsumerRegisterResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/register";
    }

    /**
     * @param {User_Register} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserRegister(data?: User_Register): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
