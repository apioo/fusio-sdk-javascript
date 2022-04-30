/**
 * BackendActionListResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Action_Index} from "./Action_Index";

export default class BackendActionListResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/action/list";
    }

    /**
     * @returns {AxiosPromise<Action_Index>}
     */
    public backendActionActionGetIndex(): AxiosPromise<Action_Index> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Action_Index>(this.url, params);
    }

}
