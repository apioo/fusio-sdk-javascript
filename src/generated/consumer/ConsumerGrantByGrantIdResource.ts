/**
 * ConsumerGrantByGrantIdResource generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import Axios, {AxiosInstance, AxiosPromise, Method} from "axios";

export default class ConsumerGrantByGrantIdResource {
    private url: string;
    private token: string;
    private httpClient: AxiosInstance;

    private grant_id: string;

    public constructor(grant_id: string, baseUrl: string, token: string, httpClient?: AxiosInstance) {
        this.grant_id = grant_id;

        this.url = baseUrl + "/consumer/grant/"+grant_id+"";
        this.token = token;
        this.httpClient = httpClient ? httpClient : Axios.create();
    }

    /**
     * @returns {AxiosPromise<void>}
     */
    public consumerActionGrantDelete() {
        let params = {
            method: <Method> "DELETE",
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
        };

        return this.httpClient.delete(this.url, params);
    }

}
