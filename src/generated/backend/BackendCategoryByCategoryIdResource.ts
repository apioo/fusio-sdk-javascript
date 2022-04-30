/**
 * BackendCategoryByCategoryIdResource generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {AxiosInstance, AxiosPromise, Method} from "axios";
import {ResourceAbstract} from "sdkgen-client"
import {Category} from "./Category";
import {Category_Update} from "./Category_Update";
import {Message} from "./Message";

export default class BackendCategoryByCategoryIdResource extends ResourceAbstract {
    private url: string;

    private category_id: string;

    public constructor(category_id: string, baseUrl: string, httpClient?: AxiosInstance) {
        super(baseUrl, httpClient);

        this.category_id = category_id;

        this.url = baseUrl + "/backend/category/"+category_id+"";
    }

    /**
     * @returns {AxiosPromise<Category>}
     */
    public backendActionCategoryGet(): AxiosPromise<Category> {
        let params = {
            method: <Method> "GET",
        };

        return this.httpClient.get<Category>(this.url, params);
    }

    /**
     * @param {Category_Update} data
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryUpdate(data?: Category_Update): AxiosPromise<Message> {
        let params = {
            method: <Method> "PUT",
        };

        return this.httpClient.put<Message>(this.url, data, params);
    }

    /**
     * @returns {AxiosPromise<Message>}
     */
    public backendActionCategoryDelete(): AxiosPromise<Message> {
        let params = {
            method: <Method> "DELETE",
        };

        return this.httpClient.delete(this.url, params);
    }

}
