/**
 * BackendAppTokenByTokenIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {App_Token} from "./App_Token";

export default class BackendAppTokenByTokenIdResource extends ResourceAbstract {
    private url: string;

    private token_id: string;

    public constructor(token_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.token_id = token_id;

        this.url = baseUrl + "/backend/app/token/"+token_id+"";
    }

    /**
     * @returns {AxiosPromise<App_Token>}
     */
    public backendActionAppTokenGet(): AxiosPromise<App_Token> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<App_Token>(this.url, params);
    }

}
