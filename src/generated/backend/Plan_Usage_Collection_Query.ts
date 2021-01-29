/**
 * Plan_Usage_Collection_Query generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {Collection_Query} from "./Collection_Query";

export interface Plan_Usage_Collection_Query extends Collection_Query {
    from?: string
    to?: string
    routeId?: number
    appId?: number
    userId?: number
    search?: string
}

