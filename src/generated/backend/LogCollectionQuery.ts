/**
 * LogCollectionQuery automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {CollectionQuery} from "./CollectionQuery";
export interface LogCollectionQuery extends CollectionQuery {
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