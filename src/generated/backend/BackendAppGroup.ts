/**
 * BackendAppGroup generated on 2022-07-09
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendAppByAppIdTokenAndTokenIdResource from "./BackendAppByAppIdTokenAndTokenIdResource";
import BackendAppByAppIdResource from "./BackendAppByAppIdResource";
import BackendAppResource from "./BackendAppResource";
import BackendAppTokenByTokenIdResource from "./BackendAppTokenByTokenIdResource";
import BackendAppTokenResource from "./BackendAppTokenResource";

export default class BackendAppGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/app/$app_id<[0-9]+>/token/:token_id
     */
    public getBackendAppByAppIdTokenAndTokenId(app_id: string, token_id: string): BackendAppByAppIdTokenAndTokenIdResource
    {
        return new BackendAppByAppIdTokenAndTokenIdResource(
            app_id,
            token_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/app/$app_id<[0-9]+>
     */
    public getBackendAppByAppId(app_id: string): BackendAppByAppIdResource
    {
        return new BackendAppByAppIdResource(
            app_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/app
     */
    public getBackendApp(): BackendAppResource
    {
        return new BackendAppResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/app/token/$token_id<[0-9]+>
     */
    public getBackendAppTokenByTokenId(token_id: string): BackendAppTokenByTokenIdResource
    {
        return new BackendAppTokenByTokenIdResource(
            token_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/app/token
     */
    public getBackendAppToken(): BackendAppTokenResource
    {
        return new BackendAppTokenResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
