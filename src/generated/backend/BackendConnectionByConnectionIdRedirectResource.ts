/**
 * BackendConnectionByConnectionIdRedirectResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Message} from "./Message";

export default class BackendConnectionByConnectionIdRedirectResource extends ResourceAbstract {
    private url: string;

    private connection_id: string;

    public constructor(connection_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.connection_id = connection_id;

        this.url = baseUrl + "/backend/connection/"+connection_id+"/redirect";
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionConnectionGetRedirect(): AxiosPromise<Message> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Message>(this.url, params);
    }

}
