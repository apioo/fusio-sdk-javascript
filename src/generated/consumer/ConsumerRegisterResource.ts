/**
 * ConsumerRegisterResource generated on 2022-06-05
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Register} from "./User_Register";
import {Message} from "./Message";

export default class ConsumerRegisterResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/register";
    }

    /**
     * @param {User_Register} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserRegister(data: User_Register): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
