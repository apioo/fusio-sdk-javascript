/**
 * BackendConnectionFormResource generated on 2022-04-23
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Form_Container} from "./Form_Container";

export default class BackendConnectionFormResource extends ResourceAbstract {
    private url: string;


    public constructor(baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);


        this.url = baseUrl + "/backend/connection/form";
    }

    /**
     * @returns {AxiosPromise<Form_Container>}
     */
    public backendActionConnectionGetForm(): AxiosPromise<Form_Container> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Form_Container>(this.url, params);
    }

}
