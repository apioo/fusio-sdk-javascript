/**
 * BackendRoutesResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Collection_Category_Query} from "./Collection_Category_Query";
import {Route_Collection} from "./Route_Collection";
import {Route_Create} from "./Route_Create";
import {Message} from "./Message";

export default class BackendRoutesResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/routes";
    }

    /**
     * @param {Collection_Category_Query} query
     * @returns {Promise<AxiosResponse<Route_Collection>>}
     */
    public async backendActionRouteGetAll(query?: Collection_Category_Query): Promise<AxiosResponse<Route_Collection>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Route_Collection>(this.url, params);
    }

    /**
     * @param {Route_Create} data
     * @returns {Promise<AxiosResponse<Message>>}
     */
    public async backendActionRouteCreate(data: Route_Create): Promise<AxiosResponse<Message>> {
        let params: AxiosRequestConfig = {
            method: 'POST',
        };

        return this.httpClient.post<Message>(this.url, data, params);
    }

}
