/**
 * App_Token_Collection_Query generated on 2021-01-29
 * {@link https://github.com/apioo}
 */


import {Collection_Query} from "./Collection_Query";

export interface App_Token_Collection_Query extends Collection_Query {
    from?: string
    to?: string
    appId?: number
    userId?: number
    status?: number
    scope?: string
    ip?: string
    search?: string
}

