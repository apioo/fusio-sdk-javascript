/**
 * BackendStatisticIncomingRequestsResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Backend_Log_Collection_Query} from "./Backend_Log_Collection_Query";
import {Statistic_Count} from "./Statistic_Count";

export default class BackendStatisticIncomingRequestsResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/statistic/incoming_requests";
    }

    /**
     * @param {Backend_Log_Collection_Query} query
     * @returns {AxiosPromise<Statistic_Count>}
     */
    public backendActionStatisticGetIncomingRequests(query?: Backend_Log_Collection_Query): AxiosPromise<Statistic_Count> {
        let params = {
            method: <Method> "GET",
            params: query,
        };

        return this.httpClient.get<Statistic_Count>(this.url, params);
    }

}
