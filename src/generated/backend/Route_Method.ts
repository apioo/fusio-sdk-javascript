/**
 * Route_Method generated on 2021-06-26
 * {@link https://github.com/apioo}
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
