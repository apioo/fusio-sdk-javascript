/**
 * BackendStatisticIssuedTokensResource generated on 2022-07-10
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_App_Token_Collection_Query} from "./Backend_App_Token_Collection_Query";
import {Statistic_Chart} from "./Statistic_Chart";

export default class BackendStatisticIssuedTokensResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/issued_tokens";
    }

    /**
     * @param {Backend_App_Token_Collection_Query} query
     * @returns {Promise<AxiosResponse<Statistic_Chart>>}
     */
    public async backendActionStatisticGetIssuedTokens(query?: Backend_App_Token_Collection_Query): Promise<AxiosResponse<Statistic_Chart>> {
        let params: AxiosRequestConfig = {
            method: 'GET',
            params: query,
        };

        return this.httpClient.get<Statistic_Chart>(this.url, params);
    }

}
