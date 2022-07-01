/**
 * Audit_Collection_Query generated on 2022-07-01
 * {@link https://sdkgen.app}
 */

import {Collection_Query} from "./Collection_Query";
export interface Audit_Collection_Query extends Collection_Query {
    from?: string
    to?: string
    appId?: number
    userId?: number
    event?: string
    ip?: string
    message?: string
    search?: string
}
