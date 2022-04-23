/**
 * ConsumerActivateResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {User_Activate} from "./User_Activate";
import {Message} from "./Message";

export default class ConsumerActivateResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/consumer/activate";
    }

    /**
     * @param {User_Activate} data
     * @returns {AxiosPromise<Message>}
     */
    public consumerActionUserActivate(data?: User_Activate): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
