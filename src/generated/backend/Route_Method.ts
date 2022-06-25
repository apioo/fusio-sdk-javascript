/**
 * Route_Method generated on 2022-06-25
 * {@link https://sdkgen.app}
 */

import {Route_Method_Responses} from "./Route_Method_Responses";
export interface Route_Method {
    method?: string
    version?: number
    status?: number
    active?: boolean
    public?: boolean
    description?: string
    operationId?: string
    parameters?: string
    request?: string
    response?: string
    responses?: Route_Method_Responses
    action?: string
    costs?: number
}
