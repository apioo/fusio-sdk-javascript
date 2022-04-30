/**
 * BackendPageByPageIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Page} from "./Page";
import {Page_Update} from "./Page_Update";
import {Message} from "./Message";

export default class BackendPageByPageIdResource extends ResourceAbstract {
    private url: string;

    private page_id: string;

    public constructor(page_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.page_id = page_id;

        this.url = baseUrl + "/backend/page/"+page_id+"";
    }

    /**
     * @returns {AxiosPromise<Page>}
     */
    public backendActionPageGet(): AxiosPromise<Page> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Page>(this.url, params);
    }

    /**
     * @param {Page_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPageUpdate(data?: Page_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionPageDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
