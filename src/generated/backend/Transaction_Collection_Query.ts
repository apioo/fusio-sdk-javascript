/**
 * Transaction_Collection_Query generated on 2022-05-07
 * {@link https://sdkgen.app}
 */

import {Collection_Query} from "./Collection_Query";
export interface Transaction_Collection_Query extends Collection_Query {
    from?: string
    to?: string
    planId?: number
    userId?: number
    appId?: number
    status?: number
    provider?: string
    search?: string
}
