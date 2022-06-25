/**
 * ConsumerActivateResource generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Activate} from "./User_Activate";
import {Message} from "./Message";

export default class ConsumerActivateResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/activate";
    }

    /**
     * @param {User_Activate} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async consumerActionUserActivate(data: User_Activate): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
