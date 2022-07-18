/**
 * App_Token_Collection_Query generated on 2022-07-18
 * {@link https://sdkgen.app}
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
