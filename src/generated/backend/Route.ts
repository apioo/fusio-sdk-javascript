/**
 * Route generated on 2021-06-26
 * {@link https://github.com/apioo}
 */

import {Route_Version} from "./Route_Version";
export interface Route {
    id?: number
    priority?: number
    path?: string
    controller?: string
    scopes?: Array<string>
    config?: Array<Route_Version>
}
