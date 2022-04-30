/**
 * BackendActionGroup generated on 2022-04-30
 * {@link https://sdkgen.app}
 */

import {ResourceAbstract} from "sdkgen-client"
import BackendActionByActionIdResource from "./BackendActionByActionIdResource";
import BackendActionExecuteByActionIdResource from "./BackendActionExecuteByActionIdResource";
import BackendActionFormResource from "./BackendActionFormResource";
import BackendActionListResource from "./BackendActionListResource";
import BackendActionResource from "./BackendActionResource";

export default class BackendActionGroup extends ResourceAbstract {
    /**
     * Endpoint: /backend/action/$action_id<[0-9]+|^~>
     *
     * @returns BackendActionByActionIdResource
     */
    public getBackendActionByActionId(action_id: string): BackendActionByActionIdResource
    {
        return new BackendActionByActionIdResource(
            action_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/action/execute/:action_id
     *
     * @returns BackendActionExecuteByActionIdResource
     */
    public getBackendActionExecuteByActionId(action_id: string): BackendActionExecuteByActionIdResource
    {
        return new BackendActionExecuteByActionIdResource(
            action_id,
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/action/form
     *
     * @returns BackendActionFormResource
     */
    public getBackendActionForm(): BackendActionFormResource
    {
        return new BackendActionFormResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/action/list
     *
     * @returns BackendActionListResource
     */
    public getBackendActionList(): BackendActionListResource
    {
        return new BackendActionListResource(
            this.baseUrl,
            this.httpClient
        );
    }

    /**
     * Endpoint: /backend/action
     *
     * @returns BackendActionResource
     */
    public getBackendAction(): BackendActionResource
    {
        return new BackendActionResource(
            this.baseUrl,
            this.httpClient
        );
    }

}
