/**
 * Log_Collection_Query generated on 2021-06-23
 * {@link https://github.com/apioo}
 */

import {Collection_Query} from "./Collection_Query";
export interface Log_Collection_Query extends Collection_Query {
    from?: string
    to?: string
    routeId?: number
    appId?: number
    userId?: number
    ip?: string
    userAgent?: string
    method?: string
    path?: string
    header?: string
    body?: string
    search?: string
}
