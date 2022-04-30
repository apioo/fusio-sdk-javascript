/**
 * BackendStatisticIssuedTokensResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_App_Token_Collection_Query} from "./Backend_App_Token_Collection_Query";
import {Statistic_Count} from "./Statistic_Count";

export default class BackendStatisticIssuedTokensResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/issued_tokens";
    }

    /**
     * @param {Backend_App_Token_Collection_Query} query
     * @returns {AxiosPromise<Statistic_Count>}
     */
    public backendActionStatisticGetIssuedTokens(query?: Backend_App_Token_Collection_Query): AxiosPromise<Statistic_Count> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}
