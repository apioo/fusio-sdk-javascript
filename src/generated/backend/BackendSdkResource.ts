/**
 * BackendSdkResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Sdk_Types} from "./Sdk_Types";
import {Sdk_Generate} from "./Sdk_Generate";
import {Message} from "./Message";

export default class BackendSdkResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/sdk";
    }

    /**
     * @returns {AxiosPromise<Sdk_Types>}
     */
    public backendActionSdkGetAll(): AxiosPromise<Sdk_Types> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Sdk_Types>(this.url, params);
    }

    /**
     * @param {Sdk_Generate} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionSdkGenerate(data?: Sdk_Generate): AxiosPromise<Message> {
        let params = {
            method: <Method> "POST",
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
